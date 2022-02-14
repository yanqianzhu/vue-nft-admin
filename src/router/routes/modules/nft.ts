import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const user: AppRouteModule = {
  path: '/nft',
  name: 'Ntf',
  component: LAYOUT,
  redirect: '/nft/nftBatchList',
  meta: {
    orderNo: 11,
    icon: 'mdi:nativescript',
    title: 'NFT管理',
  },
  children: [
    {
      path: 'nftBatchList',
      name: 'NftBatchList',
      component: () => import('/@/views/nft/nftBatchList/index.vue'),
      meta: {
        title: 'NFT批次管理',
      },
    },
  ],
};

export default user;
