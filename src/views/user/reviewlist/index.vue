<template>
  <PageWrapper>
    <a-modal v-model:visible="state.visible" title="不通过原因" @ok="handleOk">
      <a-input v-model:value="state.failureReason" :maxlength="100" />
    </a-modal>
    <BasicTable @register="registerTable" :showIndexColumn="false">
      <template #effectiveStart="{ record }">{{formatToDate(record.effectiveStart * 1000, 'YYYY-MM-DD HH:mm')}}</template>
      <template #effectiveEnd="{ record }">{{formatToDate(record.effectiveEnd * 1000, 'YYYY-MM-DD HH:mm')}}</template>
      <template #authenTime="{ record }">{{formatToDate(record.authenTime * 1000, 'YYYY-MM-DD HH:mm')}}</template>
      <template #certifyState="{ record }">{{state.stateText[record.certifyState]}}</template>
      <template #img="{ record }">
        <TableImg :size="60" :imgList="[getUrl(record.identityCardsPeople), getUrl(record.identityCardsFront), getUrl(record.identityCardsBack)]"></TableImg>
      </template>
      <template #action="{ record }">
        <TableAction
          stopButtonPropagation
          v-if="record.certifyState === 1 || record.certifyState === 0"
          :actions="[
            {
              label: '审核',
              popConfirm: {
                title: '是否审核通过？',
                okText: '审核通过',
                cancelText: '审核不通过',
                confirm: pass.bind(null, record),
                cancel: notpass.bind(null, record),
              },
            },
          ]"
        />
        <span v-if="record.certifyState === 2">审核通过</span>
        <span v-if="record.certifyState === 3">审核不通过</span>
      </template>
      <!-- <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="handleReload"> 刷新并返回第一页 </a-button>
      </template> -->
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';
  import { BasicTable, useTable, TableAction, TableImg } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';
  import { certifyListApi, certifyUpdate } from '/@/api/review';
  import { formatToDate } from '/@/utils/dateUtil';
  import { useMessage } from '/@/hooks/web/useMessage';
  const { createMessage } = useMessage();
  const [registerTable, { reload }] = useTable({
    title: '实名审核列表',
    api: certifyListApi,
    columns: getBasicColumns(),
    pagination: { pageSize: 10 },
    useSearchForm: true,
    formConfig: {
      labelWidth: 100,
      fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'YYYY-MM-DD']],
      schemas: [
        {
          field: `value`,
          label: `昵称或手机号`,
          component: 'Input',
          colProps: {
            xl: 12,
            xxl: 8,
          },
        },
        // {
        //   field: 'fieldTime',
        //   component: 'RangePicker',
        //   label: '时间字段',
        //   colProps: {
        //     span: 8,
        //   },
        // },
      ],
    },
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
      0: '未认证',
      1: '审核中',
      2: '审核成功',
      3: '审核失败'
    }
  });
  function handleReloadCurrent() {
    reload();
  }
  function getUrl(url: string) {
    if (!url) return '';
    return 'https://api-test.bedonft.com/api/v1.0/cloud/auth' + url;
  }
  function handleOk() {
    if (!state.failureReason.trim()) return createMessage.error('请输入不通过原因');
    certifyUpdate({
      certifyState: 3,
      id: state.selectId,
      failureReason: state.failureReason
    }).then((res: any) => {
      state.visible = false;
      if (!res) return handleReloadCurrent();
    });
  }
  // function handleReload() {
  //   reload({
  //     page: 1,
  //   });
  // }
  function pass(record) {
    certifyUpdate({
      certifyState: 2,
      id: record.id,
    }).then((res: any) => {
      if (!res) return handleReloadCurrent();
    });
  }
  function notpass(record) {
    state.failureReason = '';
    state.selectId = record.id;
    state.visible = true;
  }
</script>
