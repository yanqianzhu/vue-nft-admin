import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const user: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  redirect: '/user/userlist',
  meta: {
    orderNo: 9,
    icon: 'ion:grid-outline',
    title: '用户',
  },
  children: [
    {
      path: 'userlist',
      name: 'Userlist',
      component: () => import('/@/views/user/userlist/index.vue'),
      meta: {
        title: '用户列表',
      },
    },
    {
      path: 'assetslist',
      name: 'Assetslist',
      component: () => import('/@/views/user/assetslist/index.vue'),
      meta: {
        title: '资产列表',
      },
    },
    {
      path: 'reportList',
      name: 'ReportList',
      component: () => import('/@/views/user/reportList/index.vue'),
      meta: {
        title: '举报列表',
      },
    },
    {
      path: 'nftList',
      name: 'NftList',
      component: () => import('/@/views/user/nftList/index.vue'),
      meta: {
        title: '用户NFT列表',
      },
    },
    {
      path: 'reviewlist',
      name: 'Reviewlist',
      component: () => import('/@/views/user/reviewlist/index.vue'),
      meta: {
        title: t('routes.dashboard.reviewlist'),
      },
    },
    {
      path: 'flowingwater',
      name: 'Flowingwater',
      component: () => import('/@/views/user/flowingwater/index.vue'),
      meta: {
        title: '用户流水列表',
      },
    },
    {
      path: 'usercapital',
      name: 'Usercapital',
      component: () => import('/@/views/user/usercapital/index.vue'),
      meta: {
        title: '提现明细',
      },
    },
  ],
};

export default user;
