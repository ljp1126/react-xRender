import React, { useState } from 'react';
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { Line, Column, PivotTable } from 'chart-render';


const RenderChart: React.FC = () => {
  /** 新建窗口的弹窗 */
  const [component, setComponent] = useState('Line');
  const ChartRender: any = { Line, Column, PivotTable }[component];

  return (
    <PageContainer>
      <Card>
        <div>
          <div style={{ marginBottom: 10 }}>
            <button
              style={{ marginRight: 10 }}
              className="ant-btn ant-btn-primary"
              onClick={() => setComponent('Line')}
            >
              折线图
            </button>
            <button
              style={{ marginRight: 10 }}
              className="ant-btn ant-btn-primary"
              onClick={() => setComponent('Column')}
            >
              柱状图
            </button>
            <button
              style={{ marginRight: 10 }}
              className="ant-btn ant-btn-primary"
              onClick={() => setComponent('PivotTable')}
            >
              交叉表
            </button>
          </div>

          <ChartRender
            meta={[
              { id: 'date', name: '日期', isDim: true },
              { id: 'pv', name: '访问量', isDim: false },
              { id: 'uv', name: '访客数', isDim: false },
              { id: 'dv', name: '增长数', isDim: false },
            ]}
            data={[
              { date: '20200101', pv: 100, uv: 50, dv: 35 },
              { date: '20200102', pv: 120, uv: 60, dv: 43 },
              { date: '20200103', pv: 140, uv: 70, dv: 94 },
              { date: '20200104', pv: 160, uv: 80, dv: 28 },
            ]}
          />
        </div>
      </Card>
    </PageContainer>
  );
};

export default RenderChart;
