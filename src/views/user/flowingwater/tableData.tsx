
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
      title: '用户User_id',
      dataIndex: 'userId',
      key: 'userId',
      ellipsis: true,
    },
    {
      title: '业务类型',
      dataIndex: 'bizType',
      key: 'bizType',
      ellipsis: true,
      slots: { customRender: 'bizType' },
    },
    {
      title: '方向',
      dataIndex: 'opt',
      key: 'opt',
      ellipsis: true,
      slots: { customRender: 'opt' },
    },
    {
      title: '变更数量',
      dataIndex: 'amount',
      key: 'amount',
      ellipsis: true,
    },
    {
      title: '变更前数量',
      dataIndex: 'beforeAmount',
      key: 'beforeAmount',
      ellipsis: true,
    },
    {
      title: '变更后数量',
      dataIndex: 'afterAmount',
      key: 'afterAmount',
      ellipsis: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      ellipsis: true,
      slots: { customRender: 'createTime' },
    },
  ];
}