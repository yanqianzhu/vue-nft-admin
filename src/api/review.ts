import { defHttp } from '/@/utils/http/axios';


enum Api {
  CertifyList = '/manage/v1/user/certify/list',
  CertifyUpdate = '/manage/v1/user/certif0y/update',
  userList = '/manage/v1/user/list',
  assetsList = '/manage/v1/user/asset/list',
  reportList = '/manage/v1/user/report/list',
  reportListUpdate = '/manage/v1/user/report/update',
  nftList = '/manage/v1/user/nft/list',
  userCapital = '/manage/v1/user/withdraw/record',
  flowingWater = '/manage/v1/user/market/list',
  getMusicNftList = '/manage/v1/music-nft/list',
  updateMineNft = '/api/v1.0/cloud/manage/mineNft',
  isdisable = '/manage/v1/user/is-disable'
}

/**
 * @description: user login api
 */
export function certifyListApi(params: any) {
  return defHttp.get(
    {
      url: Api.CertifyList,
      params: {
        ...params,
        certifyState: -1
      },
    },
  );
}
export function certifyUpdate(params: any) {
  return defHttp.post(
    {
      url: Api.CertifyUpdate,
      params,
    }
  );
}
export function updateMineNft(params: any) {
  return defHttp.post(
    {
      url: Api.updateMineNft,
      params,
    }
  );
}
export function reportListUpdate(params: any) {
  return defHttp.post(
    {
      url: Api.reportListUpdate,
      params,
    }
  );
}
export function getuserList(params: any) {
  return defHttp.get(
    {
      url: Api.userList,
      params: {
        ...params
      },
    },
  );
}
export function assetsListApi(params: any) {
  return defHttp.get(
    {
      url: Api.assetsList,
      params: {
        ...params
      },
    },
  );
}
export function reportListApi(params: any) {
  return defHttp.get(
    {
      url: Api.reportList,
      params: {
        ...params
      },
    },
  );
}
export function nftListApi(params: any) {
  return defHttp.get(
    {
      url: Api.nftList,
      params: {
        ...params
      },
    },
  );
}
export function userCapitalApi(params: any) {
  return defHttp.get(
    {
      url: Api.userCapital,
      params: {
        ...params
      },
    },
  );
}
export function getMusicNftListApi(params: any) {
  return defHttp.get(
    {
      url: Api.getMusicNftList,
      params: {
        ...params
      },
    },
  );
}
export function flowingWaterApi(params: any) {
  return defHttp.get(
    {
      url: Api.flowingWater,
      params: {
        ...params
      },
    },
  );
}
export function isdisableApi(params: any) {
  return defHttp.post(
    {
      url: Api.isdisable,
      params: {
        ...params
      },
    },
  );
}
