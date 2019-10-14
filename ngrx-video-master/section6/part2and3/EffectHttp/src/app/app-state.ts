export interface AppState {
  counter: number;
  products: IData
}

export interface IData {
  loading: boolean,
  data: Array<any>,
  error: any
}