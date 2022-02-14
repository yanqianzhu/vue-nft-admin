
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'Id',
      dataIndex: 'Id',
      ellipsis: true,
    },
    {
      title: '作品Id',
      dataIndex: 'reportId',
      ellipsis: true,
    },
    {
      title: '举报类型',
      dataIndex: 'reportType',
      slots: { customRender: 'reportType' },
      ellipsis: true,
    },
    {
      title: '举报种类',
      dataIndex: 'type',
      ellipsis: true,
      slots: { customRender: 'type' },
    },
    {
      title: '举报状态',
      dataIndex: 'state',
      ellipsis: true,
      slots: { customRender: 'state' },
    },
    {
      title: '举报内容',
      dataIndex: 'content',
    },
  ];
}
