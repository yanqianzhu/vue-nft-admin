
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
      title: '认证图片',
      dataIndex: 'img',
      ellipsis: true,
      slots: { customRender: 'img' },
    },
    {
      title: '审核状态',
      dataIndex: 'certifyState',
      ellipsis: true,
      slots: { customRender: 'certifyState' },
    },
    {
      title: '认证时间',
      dataIndex: 'authenTime',
      ellipsis: true,
      slots: { customRender: 'authenTime' },
      
    },
    {
      title: '有效期开始时间',
      dataIndex: 'effectiveStart',
      ellipsis: true,
      slots: { customRender: 'effectiveStart' },
    },
    {
      title: '有效期结束时间',
      dataIndex: 'effectiveEnd',
      ellipsis: true,
      slots: { customRender: 'effectiveEnd' },
    },
    // {
    //   title: '查看详情',
    //   dataIndex: 'endTime4',
    //   ellipsis: true,
    // },
    // {
    //   title: '修改状态',
    //   dataIndex: 'action',
    //   ellipsis: true,
    // },
  ];
}
