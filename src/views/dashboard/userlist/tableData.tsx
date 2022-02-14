
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      ellipsis: true,
    },
    {
      title: '真实姓名',
      dataIndex: 'userRealName',
      ellipsis: true,
    },
    {
      title: '身份证号',
      dataIndex: 'userCardId',
      ellipsis: true,
    },
    {
      title: '手持',
      dataIndex: 'identityCardsPeople',
      ellipsis: true,
    },
    {
      title: '审核状态',
      dataIndex: 'beginTime',
      ellipsis: true,
    },
    {
      title: '认证时间',
      dataIndex: 'endTime1',
      ellipsis: true,
    },
    {
      title: '有效期开始时间',
      dataIndex: 'endTime2',
      ellipsis: true,
    },
    {
      title: '有效期结束时间',
      dataIndex: 'endTime3',
      ellipsis: true,
    },
    {
      title: '查看详情',
      dataIndex: 'endTime4',
      ellipsis: true,
    },
    {
      title: '修改状态',
      dataIndex: 'action',
      ellipsis: true,
    },
  ];
}