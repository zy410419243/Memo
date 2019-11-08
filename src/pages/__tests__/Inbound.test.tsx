import React from 'react';
import { mount } from 'enzyme';
import Inbound from '../Inbound';

describe('Inbound', () => {
  const formData = {
    materialType: 0,
    materialTypeError: false,
    materialTypeMessage: 'error',
    materialId: 11,
    materialIdError: false,
    materialIdMessage: 'error',
    materialCost: 100,
    materialCostError: false,
    materialCostMessage: 'error',
    type: 0,
    length: 101,
    lengthError: false,
    lengthMessage: 'error',
    width: 102,
    widthError: false,
    widthMessage: 'error',
    height: 103,
    heightError: false,
    heightMessage: 'error',
    weight: 104,
    weightError: false,
    weightMessage: 'error',
    predictWeight: 105,
    freight: 106,
    freightError: false,
    freightMessage: 'error',
    extraCost: 107,
    description: '',
    round: 0,
    roundError: false,
    roundMessage: 'error',
    sellType: 0,
    sellTypeError: false,
    sellTypeMessage: 'error',
  };

  const formOptions = {
    materialType: [{ text: 'materialTypeText', value: 'materialTypeValue' }],
    materialId: [],
    roundType: [],
    sellType: [],
  };

  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

  afterAll(() => {
    errorSpy.mockRestore();
    warnSpy.mockRestore();
  });

  it('render correctly', () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const onSpecificationInputBlur = jest.fn();
    const wrapper = mount(
      <Inbound
        onChange={onChange}
        onSubmit={onSubmit}
        formData={formData}
        formOptions={formOptions}
        onSpecificationInputBlur={onSpecificationInputBlur}
        loading={false}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Select of calcuteType', () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const onSpecificationInputBlur = jest.fn();
    const wrapper: any = mount(
      <Inbound
        onChange={onChange}
        onSubmit={onSubmit}
        formData={formData}
        formOptions={formOptions}
        onSpecificationInputBlur={onSpecificationInputBlur}
        loading={false}
      />,
    );
    expect(
      wrapper
        .find('ForwardRef(Select)')
        .first()
        .props().value,
    ).toBe(0);
    wrapper
      .find('ForwardRef(Select)')
      .first()
      .props()
      .onChange({ target: { value: 'test1' } });
    expect(onChange).toHaveBeenCalledWith(
      {
        text: '',
        value: 'test1',
      },
      'select',
      'materialType',
    );
    wrapper.setProps({ formData: Object.assign({}, formData, { calcuteType: 1 }) });
    expect(
      wrapper
        .find('ForwardRef(Select)')
        .first()
        .props().value,
    ).toBe(0);
  });

  it('renderSpecification', () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const onSpecificationInputBlur = jest.fn();
    const wrapper: any = mount(
      <Inbound
        onChange={onChange}
        onSubmit={onSubmit}
        formData={formData}
        formOptions={formOptions}
        onSpecificationInputBlur={onSpecificationInputBlur}
        loading={false}
      />,
    );
    expect(
      wrapper
        .find('label')
        .at(0)
        .text(),
    ).toBe('类别 *');
    expect(
      wrapper
        .find('label')
        .at(1)
        .text(),
    ).toBe('卖出类型 *');
    expect(
      wrapper
        .find('label')
        .at(2)
        .text(),
    ).toBe('截面直径 *');
    expect(
      wrapper
        .find('label')
        .at(3)
        .text(),
    ).toBe('圆钢类别 *');
    expect(
      wrapper
        .find('label')
        .at(4)
        .text(),
    ).toBe('材质 *');
    expect(wrapper.find('label')).toHaveLength(11);

    // wrapper.setProps({ formData: Object.assign({}, formData, { calcuteType: 1 }) });
    // expect(
    //   wrapper
    //     .find('label')
    //     .at(1)
    //     .text(),
    // ).toBe('材质 *');
    // expect(
    //   wrapper
    //     .find('label')
    //     .at(2)
    //     .text(),
    // ).toBe('实际重量 *');
    // expect(
    //   wrapper
    //     .find('label')
    //     .at(3)
    //     .text(),
    // ).toBe('高度 *');
    // expect(wrapper.find('label')).toHaveLength(7);

    wrapper.setProps({ formData: Object.assign({}, formData, { calcuteType: 2 }) });
    expect(wrapper.find('label')).toHaveLength(11);
  });

  // it('inputs', () => {
  //   const onChange = jest.fn();
  //   const onSubmit = jest.fn();
  //   const onSpecificationInputBlur = jest.fn();
  //   const wrapper: any = mount(
  //     <Inbound
  //       onChange={onChange}
  //       onSubmit={onSubmit}
  //       formData={formData}
  //       formOptions={formOptions}
  //       onSpecificationInputBlur={onSpecificationInputBlur}
  //     />,
  //   );
  //   wrapper
  //     .find('ForwardRef(Input)')
  //     .at(3)
  //     .props()
  //     .onChange({ target: { value: 997 }, key: 'weight' });
  //   expect(onChange).toHaveBeenCalledWith({ text: 997, value: 997 }, 'input', 'weight');

  //   wrapper
  //     .find('ForwardRef(Input)')
  //     .at(4)
  //     .props()
  //     .onChange({ target: { value: 996 }, key: 'materialCost' });
  //   expect(onChange).toHaveBeenCalledWith({ text: 996, value: 996 }, 'input', 'materialCost');
  // });
});
