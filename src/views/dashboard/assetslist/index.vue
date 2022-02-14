<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
  
    <BasicTable @register="registerTable" :showIndexColumn="false">
    <BasicModal
        v-bind="$attrs"
        @register="register"
        title="Modal Title"
      >
      1
    </BasicModal>
    <template #action="{ record }">
        <!-- <TableAction
          stopButtonPropagation
          v-if="record.certifyState === 0"
          :actions="[
            {
              label: '审核',
              popConfirm: {
                title: '审核通过',
                okText: '审核通过',
                cancelText: '审核不通过',
                confirm: pass.bind(null, record),
                cancel: notpass.bind(null, record)
              },
            },
          ]"
          
        /> -->
        <span>审核通过</span>
      </template>
      <!-- <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="handleReload"> 刷新并返回第一页 </a-button>
      </template> -->
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
  import { DatePicker } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';
  export default defineComponent({
    components: { BasicTable, PageWrapper, TableAction, BasicModal },
    setup() {
      console.log(useModal)
      const [registerTable, { reload }] = useTable({
        title: '实名审核列表',
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
        visible: true,
        selectId: 0,
        failureReason: ''
      })
      function handleReloadCurrent() {
        reload();
      }

      function handleReload() {
        reload({
          page: 1,
        });
      }
      const [register, { openModal }] = useModal();
      function pass(record) {
        certifyUpdate({
          certifyState: 2,
          id: record.id
        }).then((res: any) => {
          if (!res) return handleReloadCurrent();
        })
      }
      function notpass(record) {
        console.log(openModal)
        openModal(true)
        state.failureReason = '';
        state.selectId = record.id;
        state.visible = true;
      }
      function handleOk() {
        state.visible = false;
      }
      console.log(toRefs(state))
      return {
        ...toRefs(state),
        registerTable,
        handleReloadCurrent,
        handleReload,
        pass,
        notpass,
        handleOk,
        register,
        DatePicker
      };
    },
  });
</script>