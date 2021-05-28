import React from 'react';
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import Generator from 'fr-generator';


const RenderGenerator: React.FC = () => {
  /** 新建窗口的弹窗 */
  const defaultValue = {
    type: 'object',
    properties: {
      inputName: {
        title: '简单输入框',
        type: 'string',
      },
    },
  };

  return (
    <PageContainer>
      <Card>
        <Generator defaultValue={defaultValue} />
      </Card>
    </PageContainer>
  );
};

export default RenderGenerator;
