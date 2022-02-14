
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'Id',
      ellipsis: true,
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
      key: 'nickname',
      ellipsis: true,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      ellipsis: true,
      slots: { customRender: 'sex' },
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
      ellipsis: true,
    },
    {
      title: '粉丝数',
      dataIndex: 'fansCount',
      key: 'fans',
      ellipsis: true,
    },
    {
      title: '关注数',
      dataIndex: 'attentionCount',
      key: 'attentionCount',
      ellipsis: true,
    },
    {
      title: '获赞数',
      dataIndex: 'likesCount',
      key: 'like',
      ellipsis: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createtime',
      slots: { customRender: 'createTime' },
    },
    {
      title: '禁用状态',
      dataIndex: 'isDisable',
      key: 'isDisable',
      slots: { customRender: 'isDisable' },
    },
    {
      title: '删除状态',
      dataIndex: 'isDeleted',
      key: 'isDeleted',
      slots: { customRender: 'isDeleted' },
    },
    {
      title: '删除',
      dataIndex: 'delete',
      key: 'delete',
      ellipsis: true,
      slots: { customRender: 'delete' }
    },
    {
      title: '禁用',
      dataIndex: 'disable',
      key: 'disable',
      ellipsis: true,
      slots: { customRender: 'disable' }
    },
  ];
}