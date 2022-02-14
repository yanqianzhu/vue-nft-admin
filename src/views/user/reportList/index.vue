<template>
  <PageWrapper>
    <BasicTable @register="registerTable" :showIndexColumn="false">
      <template #type="{ record }">{{record.type == 1 ? '作品' : '评论'}}</template>
      <template #reportType="{ record }">{{record.reportType}}</template>
      <template #state="{ record }">{{state.stateText[record.state]}}</template>
      
      <template #action="{ record }">
        <TableAction
          stopButtonPropagation
          :actions="[
            {
              label: '操作',
              disabled: record.state != 0,
              popConfirm: {
                title: '处理举报',
                okText: '举报成功',
                cancelText: '举报失败',
                confirm: pass.bind(null, record, 1),
                cancel: pass.bind(null, record, 2),
              },
            },
          ]"
        />
        <span v-if="record.certifyState === 2">审核通过</span>
        <span v-if="record.certifyState === 3">审核不通过</span>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';
  import { reportListApi, reportListUpdate } from '/@/api/review';
  // import { formatToDate } from '/@/utils/dateUtil';
  
  const [registerTable, { reload }] = useTable({
    title: '举报列表',
    api: reportListApi,
    columns: getBasicColumns(),
    pagination: { pageSize: 10 },
    // useSearchForm: true,
    // formConfig: {
    //   labelWidth: 100,
    //   schemas: [
    //     {
    //       field: `value`,
    //       label: `昵称或手机号`,
    //       component: 'Input',
    //       colProps: {
    //         xl: 12,
    //         xxl: 8,
    //       },
    //     },
    //   ],
    // },
    actionColumn: {
      title: '操作',
      slots: { customRender: 'action' },
    },
  });
  const state = reactive({
    visible: false,
    selectId: 0,
    failureReason: '',
    stateText: {
      0: '待处理',
      1: '举报成功',
      2: '举报失败',
    }
  });
  function handleReloadCurrent() {
    reload();
  }

  // function handleReload() {
  //   reload({
  //     page: 1,
  //   });
  // }
  function pass(record, state) {
    reportListUpdate({
      state: state,
      id: record.Id,
    }).then((res: any) => {
      if (!res) return handleReloadCurrent();
    });
  }
</script>
