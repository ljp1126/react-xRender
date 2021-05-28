import React, { useState } from 'react';
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { Table, Search, TableProvider } from 'table-render';


const RenderTable: React.FC = () => {
  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);

  const dataSource:any = [];
  for (let i = 0; i < 20; i++) {
    dataSource.push({
      id: i.toString(),
      title: `标题${i + 1}`,
      created_at: new Date().getTime(),
      update_at: new Date().getTime(),
    });
  }

// 详细可见 form-render 的使用
const schema = {
  type: 'object',
  properties: {
    string: {
      title: '标题',
      type: 'string',
      'ui:width': '30%',
    },
    created_at: {
      title: '创建时间',
      type: 'string',
      format: 'date',
      'ui:width': '30%',
    },
  },
};

// 配置完全透传 antd table
const columns = [
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '变更时间',
    key: 'since',
    dataIndex: 'update_at',
    valueType: 'date',
  },
  {
    title: '操作',
    render: (row:any, record:any) => <a onClick={() => alert(row.title)}>编辑</a>,
  },
];

  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };

  return (
    <PageContainer>
      <Card>
        <TableProvider>
          <Search schema={schema} api={searchApi} />
          <Table columns={columns} rowKey="id" />
        </TableProvider>
      </Card>
    </PageContainer>
  );
};

export default RenderTable;
