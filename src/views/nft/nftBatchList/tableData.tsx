
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'Id',
      dataIndex: 'Id',
      ellipsis: true,
    },
    {
      title: '昵称',
      dataIndex: 'NickName',
      ellipsis: true,
    },
    {
      title: '音乐名称',
      dataIndex: 'MusicName',
      ellipsis: true,
    },
    {
      title: '演唱',
      dataIndex: 'Singing',
      ellipsis: true,
    },
    {
      title: 'nft标题',
      dataIndex: 'Title',
    },
    {
      title: '铸造数量',
      dataIndex: 'CastingCount',
      
    },
    {
      title: '铸造时间',
      dataIndex: 'CreateTime',
      ellipsis: true,
      slots: { customRender: 'CreateTime' },
    },
    {
      title: '版权比例',
      dataIndex: 'CopyrightProportion',
      ellipsis: true,
      slots: { customRender: 'CopyrightProportion' },
    },
    {
      title: '版权时长',
      dataIndex: 'CopyrightYear',
      ellipsis: true,
      slots: { customRender: 'CopyrightYear' },
    },
    {
      title: '单价',
      dataIndex: 'UnitPrice',
      slots: { customRender: 'UnitPrice' },
    },
    {
      title: '总价',
      dataIndex: 'TotalPrice',
      slots: { customRender: 'TotalPrice' },
    },
    {
      title: '状态',
      dataIndex: 'State',
      ellipsis: true,
      slots: { customRender: 'State' },
    },
    
  ];
}
