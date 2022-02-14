<template>
  <PageWrapper>
    <a-modal v-model:visible="visible" title="用户列表详情" @ok="handleOk">
      <div style="overflow-y: scroll;height: 400px;">
        <p>关注数: {{ userList.attentionCount }}</p>
        <p>生日: {{ userList.birthday }}</p>
        <p>创建时间: {{ userList.createTime }}</p>
        <p>抖音: {{ userList.douyinUrl }}</p>
        <p>粉丝数: {{ userList.fansCount }}</p>
        <p>头像路径: {{ userList.headShotPath }}</p>
        <p>id: {{ userList.id }}</p>
        <p>个人介绍: {{ userList.introduction }}</p>
        <p v-if="userList.isDeleted == 1">是否删除: 已删除</p>
        <p v-else>是否删除: 未删除</p>
        <p v-if="userList.isDisable == 1">是否禁用: 已禁用</p>
        <p v-else>是否禁用: 未禁用</p>
        <p>快手: {{ userList.kuaishouUrl }}</p>
        <p>酷狗: {{ userList.kugouUrl }}</p>
        <p>获赞数: {{ userList.likesCount }}</p>
        <p>昵称: {{ userList.nickName	 }}</p>
        <p>用户手机号: {{ userList.phone }}</p>
        <p>省份: {{ userList.province }}</p>
        <p>qq音乐: {{ userList.qqyinyueUrl }}</p>
        <p>加密盐: {{ userList.salt }}</p>
        <p v-if="userList.sex == 1">性别: 男</p>
        <p v-else-if="userList.sex == 2">性别: 女</p>
        <p v-else>性别: 未设置</p>
        <p>修改时间: {{ formatToDate(userList.updateTime,'YYYY-MM-DD HH:mm:ss') }}</p>
        <p>用户密码: {{ userList.userPassword }}</p>
        <p>用户类型: {{ userList.userType }}</p>
        <p>网易云: {{ userList.wangyiyunUrl }}</p>
        <p>微博: {{ userList.weiboUrl }}</p>
        <p>微信openid: {{ userList.wxOpenid }}</p>
      </div>
    </a-modal>
    <BasicTable @register="registerTable" :showIndexColumn="false">
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
      <template #sex="{ record }">{{ record.sex ? '男' : '女' }}</template>
      <template #createTime="{ record }">{{
        formatToDate(record.createTime * 1000, 'YYYY-MM-DD HH:mm')
      }}</template>
      <template #isDisable="{ record }">{{ record.isDisable ? '已禁用' : '未禁用' }}</template>
      <template #isDeleted="{ record }">{{ record.isDeleted ? '已删除' : '未删除' }}</template>
      <template #delete><a style="color: red">删除</a></template>
      <template #disable="{ record }">
        <TableAction
          stopButtonPropagation
          :actions="[
            {
              label: record.isDisable == 0 ? '禁用' : '已禁用',
              disabled: record.isDisable == 1,
              popConfirm: {
                title: '确认修改状态吗?',
                confirm: pass.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { getuserList, isdisableApi } from '/@/api/review';
  import { formatToDate } from '/@/utils/dateUtil';
  export default defineComponent({
    components: { BasicTable, PageWrapper, TableAction, BasicModal },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '用户列表',
        api: getuserList,
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
            },
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
        userList: [],
      });
      function showModal(record) {
        state.visible = true;
        // console.log(record)
        state.userList = record;
        console.log(state.userList);
      }
      const handleOk = (e: MouseEvent) => {
        state.visible = false;
      };
      function handleReloadCurrent() {
        reload();
      }
      function pass(record) {
        isdisableApi({
          id: record.id,
          isDisable: 1,
        }).then(() => {
          handleReloadCurrent();
        });
      }
      return {
        ...toRefs(state),
        registerTable,
        showModal,
        handleOk,
        formatToDate,
        pass,
        handleReloadCurrent,
      };
    },
  });
</script>
