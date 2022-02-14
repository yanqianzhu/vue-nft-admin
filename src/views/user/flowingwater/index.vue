<template>
  <PageWrapper>
    <a-modal v-model:visible="visible" title="备注详情" @ok="handleOk">
        <p>{{ remark }}</p>                                                          
    </a-modal>
    <BasicTable @register="registerTable" :showIndexColumn="false">
      <template #action="{ record }">
          <TableAction
            stopButtonPropagation
            :actions="[
              {
                label: '查看备注',
                onClick: showModal.bind(null, record.remark),
                icon: 'mdi:file-find-outline',
              },
            ]"
          />
        </template>
      <template #bizType="{ record }">{{record.bizType ? '市场购买' : '铸造'}}</template>
      <template #opt="{ record }">{{record.opt ? '增加' : '减少'}}</template>
      <template #createTime="{ record }">{{formatToDate(record.createTime * 1000, 'YYYY-MM-DD HH:mm')}}</template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs, ref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { flowingWaterApi, certifyUpdate } from '/@/api/review';
  import { formatToDate } from '/@/utils/dateUtil';
  export default defineComponent({
    components: { BasicTable, PageWrapper, TableAction, BasicModal },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '用户流水列表',
        api: flowingWaterApi,
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
        remark: ''
      })
      function showModal(remark) {
        state.visible = true
        state.remark = remark
      }
      const handleOk = (e: MouseEvent) => {
        state.visible = false;
      };
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