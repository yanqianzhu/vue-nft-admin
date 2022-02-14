
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      ellipsis: true,
    },
    {
      title: 'musicNftId',
      dataIndex: 'musicNftId',
      ellipsis: true,
    },
    {
      title: '音乐id',
      dataIndex: 'musicId',
      ellipsis: true,
    },
    {
      title: '音乐名称',
      dataIndex: 'musicName',
      ellipsis: true,
    },
    {
      title: 'nft批次名称',
      dataIndex: 'nftBatchTitle',
    },
    {
      title: '持有者',
      dataIndex: 'userId',
      
    },
    {
      title: '是否置顶',
      dataIndex: 'isTop',
      ellipsis: true,
      slots: { customRender: 'isTop' },
    },
    {
      title: '是否私有',
      dataIndex: 'isPrivate',
      ellipsis: true,
      slots: { customRender: 'isPrivate' },
    },
    {
      title: '持有比例',
      dataIndex: 'holdCount',
      ellipsis: true,
      slots: { customRender: 'holdCount' },
    },
    {
      title: '冻结数量',
      dataIndex: 'freezeCount',
      
    },
    {
      title: '开始时间',
      dataIndex: 'createTime',
      ellipsis: true,
      slots: { customRender: 'createTime' },
    },
    {
      title: '结束时间',
      dataIndex: 'updateTime',
      ellipsis: true,
      slots: { customRender: 'updateTime' },
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
