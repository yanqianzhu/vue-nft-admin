<template>
  <PageWrapper >
    <a-modal v-model:visible="state.visible" title="详情" @ok="handleOk">
        详情
    </a-modal>
    <BasicTable @register="registerTable" :showIndexColumn="false">
      <template #CreateTime="{ record }">{{formatToDate(record.CreateTime * 1000, 'YYYY-MM-DD HH:mm')}}</template>
      <template #CopyrightProportion="{ record }">{{record.CopyrightProportion/100}}%</template>
      <template #CopyrightYear="{ record }">{{record.CopyrightYear == -1 ? '不限期限' : (record.CopyrightYear + '月')}}</template>
      <template #holdCount="{ record }">{{record.holdCount/100}}%</template>
      <template #State="{ record }">{{state.stateText[record.State]}}</template>
      <template #UnitPrice="{ record }">{{record.UnitPrice/100}}</template>
      <template #TotalPrice="{ record }">{{record.TotalPrice/100}}</template>
      <!-- <template #action="{ record }">
        <TableAction
          stopButtonPropagation
          :actions="[
            {
              label: record.State == 10066 ? '已审核' : '审核',
              disabled: record.State == 10066,
              popConfirm: {
                title: '确认修改状态吗?',
                confirm: pass.bind(null, record),
              },
            },
            {
              label: '查看详情',
              onClick: handleFind.bind(null, record),
              icon: 'mdi:file-find-outline',
            },
          ]"
        />
      </template> -->
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';
  import { getMusicNftListApi, updateMineNft } from '/@/api/review';
  import { formatToDate } from '/@/utils/dateUtil';
  
  const [registerTable, { reload }] = useTable({
    title: 'nft批次列表',
    api: getMusicNftListApi,
    columns: getBasicColumns(),
    pagination: { pageSize: 10 },
    useSearchForm: true,
    formConfig: {
      labelWidth: 100,
      schemas: [
        {
          field: `musicName`,
          label: `音乐名称`,
          component: 'Input',
          colProps: {
            xl: 12,
            xxl: 8,
          },
        },
        {
          field: `UserNickName`,
          label: `用户昵称`,
          component: 'Input',
          colProps: {
            xl: 12,
            xxl: 8,
          },
        },
      ],
    },
    // actionColumn: {
    //   title: '操作',
    //   slots: { customRender: 'action' },
    // },
  });
  const state = reactive({
    visible: false,
    selectId: 0,
    failureReason: '',
    stateText: {
      10061: '铸造中',
      10062: '已售罄',
      10063: '已回收',
      10064: '已上架',
      10065: '未上架',
      10066: '铸造完成'
    }
  });
  // function handleReloadCurrent() {
  //   reload();
  // }
  // function handleFind(record) {
  //   state.visible = true;
  //   console.log(record);
  // }
  function handleOk() {
    state.visible = false;
  }
  // function handleReload() {
  //   reload({
  //     page: 1,
  //   });
  // }
  // function pass(record) {
  //   updateMineNft({
  //     id: record.Id
  //   }).then(() => {
  //     handleReloadCurrent();
  //   })
  // }
</script>
