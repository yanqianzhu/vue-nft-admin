<template>
  <PageWrapper>
    
    <BasicTable @register="registerTable" :showIndexColumn="false">
      <template #createTime="{ record }">{{formatToDate(record.createTime * 1000, 'YYYY-MM-DD HH:mm')}}</template>
      <template #isTop="{ record }">{{record.isTop ? '是' : '否'}}</template>
      <template #isPrivate="{ record }">{{record.isPrivate ? '是' : '否'}}</template>
      <template #holdCount="{ record }">{{record.holdCount/100}}%</template>
      <template #updateTime="{ record }">{{formatToDate(record.updateTime * 1000, 'YYYY-MM-DD HH:mm')}}</template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';
  import { nftListApi } from '/@/api/review';
  import { formatToDate } from '/@/utils/dateUtil';
  
  const [registerTable] = useTable({
    title: '用户音乐nft列表',
    api: nftListApi,
    columns: getBasicColumns(),
    pagination: { pageSize: 10 },
    useSearchForm: true,
    formConfig: {
      labelWidth: 100,
      schemas: [
        {
          field: `userId`,
          label: `持有者`,
          component: 'Input',
          colProps: {
            xl: 12,
            xxl: 8,
          },
        },
      ],
    },
  });
  // function handleReloadCurrent() {
  //   reload();
  // }
</script>
