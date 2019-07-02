import fs from 'fs-extra';
import omit from 'omit.js';
import { MappingProps } from '../controller/DocumentController';
import { getWriteFilesPaths } from '../utils/document';
import {
  joinWithRootPath,
  readJsonFile,
  writeIntoJsonFile,
} from '../utils/common';
import { success } from '../utils/log';
import { getTargetResource } from '../utils/resource';
const MappingDefaultValue = {
  CanvasPosition: {
    x: -3000,
    y: -3000,
    z: 0,
    gap: 1,
  },
  BlockGroup: {},
  TagGroup: {},
  LineGroup: {},
};

export default class DocumentService {
  config: any;

  constructor() {
    this.config = getTargetResource('server');
  }

  updateMapping = (targetItem: MappingProps, isDelete?: boolean) => {
    const removeKeys = [];
    // tslint:disable-next-line: forin
    for (const key in targetItem) {
      const value = targetItem[key];
      if (value === undefined) {
        removeKeys.push(key);
      }
    }
    targetItem = omit(targetItem, removeKeys);
    const originMappingItem = this.getOriginMappingItem(targetItem.id);
    const writeFilesPaths = getWriteFilesPaths();
    const mappingPath = joinWithRootPath(writeFilesPaths[0]);
    if (!fs.existsSync(mappingPath)) {
      fs.writeFileSync(mappingPath, []);
    }
    const result: MappingProps[] = readJsonFile(mappingPath);
    const isExistTargetIndex = result.findIndex(
      (item: MappingProps) => item.id === targetItem.id,
    );
    const newItem = Object.assign({}, originMappingItem, targetItem);
    if (isExistTargetIndex > -1) {
      if (isDelete) {
        result.splice(isExistTargetIndex, 1);
      } else {
        result[isExistTargetIndex] = newItem;
      }
    } else {
      result.push(newItem);
    }
    writeFilesPaths.map(item => writeIntoJsonFile(item, result, true));
    success(`mapping updated => ${targetItem.id}`);
  };

  getOriginMappingItem = (id: string) => {
    const targetArr = readJsonFile(this.config.document.mappingFilePath).filter(
      (item: MappingProps) => item.id === id,
    );
    const time = new Date().getTime();
    const defaultItem = {
      createTime: time,
      modifyTime: time,
      url: `./assets/mapping/${id}.json`,
    };
    const targetItem = targetArr.length > 0 ? targetArr[0] : defaultItem;
    return targetItem;
  };

  getOriginContent = (filePath: string, layout: string | any, id: string) => {
    let result = layout;
    if (!layout && id) {
      try {
        result = readJsonFile(filePath);
      } catch (error) {
        result = fs.readFileSync(joinWithRootPath(filePath));
      }
    }
    return result;
  };

  updateContent = (
    category: 'markdown' | 'mapping',
    writeFilesPaths: string[],
    content?: any,
  ) => {
    for (const item of writeFilesPaths) {
      if (category === 'markdown') {
        fs.writeFileSync(joinWithRootPath(item), content || '');
      }
      if (category === 'mapping') {
        writeIntoJsonFile(item, content || MappingDefaultValue, true);
      }
      success(`written completed => ${item}`);
    }
  };

  deleteTargetDocument = (writeFilesPaths: string[]) => {
    for (const item of writeFilesPaths) {
      if (fs.existsSync(item)) {
        fs.unlinkSync(joinWithRootPath(item));
      } else {
        throw Error(`${item} doesn't exist.`);
      }
    }
  };
}
