export interface BasicPageParams {
  Page: number;
  Size: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}
