<template>
  <PageWrapper>
    <a-modal v-model:visible="visible" title="拒绝原因" @ok="handleOk">
            
    </a-modal>
    <BasicTable @register="registerTable" :showIndexColumn="false">
      <template #createTime="{ record }">{{formatToDate(record.createTime * 1000, 'YYYY-MM-DD HH:mm')}}</template>
      <template #applyAmount="{ record }">{{record.applyAmount/100}}</template>
      <template #feeRate="{ record }">{{record.feeRate/100}}%</template>
      <template #feeTotal="{ record }">{{record.feeTotal/100}}</template>
      <template #realAmount="{ record }">{{record.realAmount/100}}</template>
      <template #state="{ record }">{{record.state}}</template>
      <template #startDate="{ record }">{{formatToDate(record.startDate * 1000, 'YYYY-MM-DD HH:mm')}}</template>
      <template #endDate="{ record }">{{formatToDate(record.endDate * 1000, 'YYYY-MM-DD HH:mm')}}</template>
      <template #action="{ record }">
        <TableAction
          stopButtonPropagation
          :actions="[
            {
              label: '查看详情',
              onClick: showModal.bind(null, record),
              icon: 'mdi:file-find-outline',
            },
          ]"
        />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs, ref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { userCapitalApi } from '/@/api/review';
  import { formatToDate } from '/@/utils/dateUtil';
  export default defineComponent({
    components: { BasicTable, PageWrapper, TableAction, BasicModal },
    setup() {
      const showModal = (failureReason: any) => {
        console.log(failureReason)
        state.visible= true;
      };
      const handleOk = (e: MouseEvent) => {
        console.log(e);
        state.visible = false;
      };
      const [registerTable, { reload }] = useTable({
        title: '提现明细列表',
        api: userCapitalApi,
        columns: getBasicColumns(),
        pagination: { pageSize: 10 },
        useSearchForm: true,
        formConfig: {
          labelWidth: 100,
          schemas: [
            {
              field: `value`,
              label: `昵称或手机号`,
              component: 'Input',
              colProps: {
                xl: 12,
                xxl: 8,
              },
            }
          ]
        },
        actionColumn: {
          title: '操作',
          slots: { customRender: 'action' },
        },
      });
      const state = reactive({
        visible: false,
        selectId: 0,
        failureReason: ''
      })
      return {
        ...toRefs(state),
        registerTable,
        handleOk,
        showModal,
        formatToDate
      };
    },
  });
</script>