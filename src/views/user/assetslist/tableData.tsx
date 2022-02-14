
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
      title: '昵称',
      dataIndex: 'nickName',
      key: 'nickName',
      ellipsis: true,
    },
    {
      title: '已提取金额',
      dataIndex: 'alreadyAmount',
      key: 'alreadyAmount',
      ellipsis: true,
      slots: { customRender: 'alreadyAmount' },
    },
    {
      title: '冻结金额',
      dataIndex: 'frozenAmount',
      key: 'frozenAmount',
      ellipsis: true,
      slots: { customRender: 'frozenAmount' },
    },
    {
      title: '可提现金额',
      dataIndex: 'sureAmount',
      key: 'sureAmount',
      ellipsis: true,
      slots: { customRender: 'sureAmount' },
    },
    {
      title: '余额',
      dataIndex: 'balance',
      key: 'balance',
      ellipsis: true,
      slots: { customRender: 'balance' },
    },
  ];
}