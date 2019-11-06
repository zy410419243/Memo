/* eslint-disable react/prop-types */
import React from 'react';
import { Button, FormControl, TextareaAutosize } from '@material-ui/core';
import {
  getInputItem,
  CommonBoundFormDataProps,
  MaterialSpecificationProps,
  CommonBoundProps,
  useStyles,
  renderPickerForMaterialId,
} from '../utils/boundUtil';

export type InboundProps = {
  formData: CommonBoundFormDataProps;
} & CommonBoundProps;

const Inbound = ({ onSubmit, formData, onChange, onSpecificationInputBlur, formOptions }: InboundProps) => {
  const classes = useStyles();

  const handleAutocompleteChange = (
    _: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    item: any,
  ) => {
    onChange(item, 'autoComplete');
  };

  const handleSelectChange = (e: React.ChangeEvent<{ name?: string | undefined; value: number }>) => {
    onChange({ text: '', value: e.target.value }, 'select');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: MaterialSpecificationProps,
  ) => {
    onChange({ text: e.target.value, value: e.target.value }, 'input', key);
  };

  return (
    <div className={classes.container}>
      {renderPickerForMaterialId({
        formOptions,
        formData,
        classes,
        handleSelectChange,
        handleAutocompleteChange,
        handleInputChange,
        onSpecificationInputBlur,
      })}

      {getInputItem({
        key: 'weight',
        error: formData.weightError,
        inputLabel: '实际重量',
        inputValue: formData.weight,
        helperText: formData.weightMessage,
        xs: 6,
        unit: 'kg',
        onChange: handleInputChange,
        onBlur: onSpecificationInputBlur,
        classes,
      })}

      {getInputItem({
        key: 'height',
        error: formData.heightError,
        inputLabel: '高度',
        inputValue: formData.height,
        helperText: formData.heightMessage,
        xs: 6,
        onChange: handleInputChange,
        onBlur: onSpecificationInputBlur,
        classes,
      })}

      {getInputItem({
        key: 'materialCost',
        error: formData.materialCostError,
        inputLabel: '单价',
        inputValue: formData.materialCost,
        helperText: formData.materialCostMessage,
        xs: 6,
        unit: '元/kg',
        onChange: handleInputChange,
        onBlur: onSpecificationInputBlur,
        classes,
      })}

      {getInputItem({
        key: 'freight',
        error: formData.freightError,
        inputLabel: '运费',
        inputValue: formData.freight,
        helperText: formData.freightMessage,
        xs: 6,
        unit: '元',
        onChange: handleInputChange,
        onBlur: onSpecificationInputBlur,
        classes,
      })}

      {getInputItem({
        key: 'extraCost',
        error: false,
        inputLabel: '其他费用',
        inputValue: formData.extraCost,
        helperText: '',
        xs: 6,
        unit: '元',
        onChange: handleInputChange,
        onBlur: onSpecificationInputBlur,
        classes,
      })}

      {(formData.materialType === 0 || formData.materialType === 1) &&
        getInputItem({
          key: 'predictWeight',
          error: false,
          inputLabel: '预估重量',
          inputValue: formData.predictWeight,
          helperText: '计算公式：体积 x 密度',
          xs: 6,
          unit: 'kg',
          readOnly: true,
          required: false,
          onChange: handleInputChange,
          onBlur: onSpecificationInputBlur,
          classes,
        })}

      <FormControl fullWidth className={classes.formControl}>
        <TextareaAutosize
          placeholder="备注"
          rows={8}
          onChange={e => handleInputChange(e, 'description')}
          value={formData.description}
        />
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          提交
        </Button>
      </FormControl>
    </div>
  );
};

export default Inbound;