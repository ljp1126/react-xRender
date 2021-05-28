import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import FormRender, { useForm } from 'form-render';


const RenderTable: React.FC = () => {
  const form = useForm();
  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);

  const schema = {
    type: 'object',
    displayType: 'row',
    labelWidth: 120,
    column: 3,
    // readOnly: true,
    disabled: true,
    properties: {
      input1: {
        title: '简单输入框',
        type: 'string',
        required: true,
      },
      select1: {
        title: '单选',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['早', '中', '晚'],
      },
      dateRange: {
        bind: ['startDate', 'endDate'],
        title: '日期',
        type: 'range',
        format: 'date',
      },
      siteUrl: {
        title: '网址',
        type: 'string',
        placeholder: '此处必填',
        required: true,
        props: {
          addonBefore: 'https://',
          addonAfter: '.com',
        },
      },
    },
  };

  const onFinish = (formData:any, errors:any) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <PageContainer>
      <Card>
        <FormRender form={form} schema={schema} onFinish={onFinish} />
        <Button type="primary" onClick={form.submit}>
          提交
        </Button>
      </Card>
    </PageContainer>
  );
};

export default RenderTable;
