import React, { FC } from 'react';
import { Form, Spin } from 'antd';
import { ResponsiveSelect } from './styled';

interface BaseAutoCompleteProps {
  name: string;
  label: string | React.ReactNode;
  isLoading: boolean;
  options: any[];
  onSearch: (query: string) => void;
  isNotFoundContent?: string;
}

const AutoComplete: FC<BaseAutoCompleteProps> = ({
  name,
  label,
  isLoading,
  options,
  onSearch,
  isNotFoundContent
}) => (
  <>
    <Form.Item name={name} label={label}>
      <ResponsiveSelect
        allowClear
        mode="multiple"
        labelInValue
        filterOption={false}
        loading={isLoading}
        notFoundContent={isLoading ? <Spin size="small" /> : isNotFoundContent}
        showSearch
        onSearch={onSearch}
        options={options}
      />
    </Form.Item>
  </>
);

export default AutoComplete;
