
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      ellipsis: true,
    }, 
    {
      title: '用户Id',
      dataIndex: 'userId',
      key: 'userId',
      ellipsis: true,
    },  
    {
      title: '申请金额',
      dataIndex: 'applyAmount',
      key: 'applyAmount',
      ellipsis: true,
      slots: { customRender: 'applyAmount' },
    },
    {
      title: '手续费率',
      dataIndex: 'feeRate',
      key: 'feeRate',
      ellipsis: true,
      slots: { customRender: 'feeRate' },
    },
    {
      title: '总手续费',
      dataIndex: 'feeTotal',
      key: 'feeTotal',
      ellipsis: true,
      slots: { customRender: 'feeTotal' },
    },
    {
      title: '实际到账',
      dataIndex: 'realAmount',
      key: 'realAmount',
      ellipsis: true,
      slots: { customRender: 'realAmount' },
    },
    {
      title: '提现状态',
      dataIndex: 'state',
      key: 'state',
      ellipsis: true,
      slots: { customRender: 'state' },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      ellipsis: true,
      slots: { customRender: 'createTime' },
    },
    {
      title: '结束周期起始日期',
      dataIndex: 'startDate',
      key: 'startDate',
      ellipsis: true,
      slots: { customRender: 'startDate' },
    },
    {
      title: '结算周期借宿日期',
      dataIndex: 'endDate',
      key: 'endDate',
      ellipsis: true,
      slots: { customRender: 'endDate' },
    },
  ];
}