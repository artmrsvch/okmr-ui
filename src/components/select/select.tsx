import React, { FC } from 'react';
import { Select, Form } from 'antd';
import { Rule } from 'antd/lib/form';
import { LabeledValue } from 'antd/lib/select';
import { OptionProps } from 'antd/es/select';
import { NamePath } from 'rc-field-form/lib/interface';
import { StyledFormItemItems, StyledStraightFormItem, FormItemVerticalLabel } from './styled';

const FormItem = Form.Item;

export interface CustomSelectProps {
  name: NamePath;
  label: string | React.ReactNode;
  rules?: Rule[];
  options: OptionProps[] | any[];
  style?: React.CSSProperties;
  size?: 'large' | 'middle' | 'small';
  loading?: boolean;
  disabled?: boolean;
  defaultValue?: string | string[] | number | number[] | LabeledValue | LabeledValue[];
  optionLabelProp?: string;
  notFoundContent?: React.ReactNode | string;
  mode?: 'multiple' | 'tags';
  filterOption?: () => boolean;
  onSearch?: (value: string) => void;
  onSelect?: (value: string | number | LabeledValue, option: OptionProps | any) => void;
  isLabelVertical?: boolean;
  allowClear?: boolean;
  showSearch?: boolean;
  tagRender?: (props: any) => React.ReactElement | never;
  getValueFromEvent?: (...args: any[]) => any;
  extra?: React.ReactNode;
  placeholder?: string | React.ReactNode;
  labelInValue?: boolean;
  isStyledLine?: boolean;
  initialValue?: string;
  isAutocompleteItems?: boolean;
  title?: string | React.ReactNode;
}

const CustomSelect: FC<CustomSelectProps> = ({
  name,
  label,
  rules,
  style,
  options,
  size,
  defaultValue,
  loading,
  disabled,
  optionLabelProp,
  notFoundContent,
  filterOption,
  mode,
  onSearch,
  isLabelVertical,
  allowClear,
  showSearch,
  tagRender,
  getValueFromEvent,
  extra,
  placeholder,
  labelInValue,
  isStyledLine,
  onSelect,
  initialValue,
  isAutocompleteItems,
  title
}) => {
  const WrapperFormItem: any = isLabelVertical
    ? FormItemVerticalLabel
    : isStyledLine
    ? StyledStraightFormItem
    : isAutocompleteItems
    ? StyledFormItemItems
    : FormItem;
  /* eslint no-unneeded-ternary: "error" */
  return (
    <WrapperFormItem
      extra={extra}
      getValueFromEvent={getValueFromEvent}
      name={name}
      rules={rules}
      label={label}
      initialValue={initialValue}>
      {title ? <div>{title}</div> : null}
      <Select
        options={options}
        defaultValue={defaultValue}
        style={style}
        size={size ? size : 'small'}
        loading={loading}
        disabled={disabled}
        optionLabelProp={optionLabelProp}
        notFoundContent={notFoundContent}
        mode={mode}
        filterOption={filterOption}
        onSearch={onSearch}
        allowClear={allowClear}
        showSearch={showSearch}
        tagRender={tagRender}
        placeholder={placeholder}
        labelInValue={labelInValue}
        onSelect={onSelect}
      />
    </WrapperFormItem>
  );
};

export default CustomSelect;
