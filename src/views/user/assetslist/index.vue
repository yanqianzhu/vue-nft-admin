<template>
  <PageWrapper>
    <a-modal v-model:visible="visible" title="认证失败原因" @ok="handleOk">
        <p>{{ failureReason }}</p>                                                          
    </a-modal>
    <BasicTable @register="registerTable" :showIndexColumn="false">
    <template #action="{ record }">
        <TableAction
          stopButtonPropagation
          :actions="[
            {
              label: '查看详情',
              onClick: showModal.bind(null, record.failureReason),
              icon: 'mdi:file-find-outline',
            },
          ]"
        />
      </template>
      <template #alreadyAmount="{ record }">{{record.alreadyAmount/100}}</template>
      <template #frozenAmount="{ record }">{{record.frozenAmount/100}}</template>
      <template #sureAmount="{ record }">{{record.sureAmount/100}}</template>
      <template #balance="{ record }">{{record.balance/100}}</template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { assetsListApi, certifyUpdate } from '/@/api/review';
  export default defineComponent({
    components: { BasicTable, PageWrapper, TableAction, BasicModal },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '资产列表',
        api: assetsListApi,
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
      // const showModal = (record) => {
      //   state.failureReason = failureReason;
      //   console.log(state.failureReason)
      //   console.log(failureReason)
      //   state.visible = true;
      //   console.log(record)
      // };
      function showModal(failureReason) {
        state.visible = true;
        state.failureReason = failureReason
        // console.log(failureReason);
      }
      const handleOk = (e: MouseEvent) => {
        state.visible = false;
      };
      return {
        ...toRefs(state),
        registerTable,
        handleOk,
        showModal,
      };
    },
  });
</script>