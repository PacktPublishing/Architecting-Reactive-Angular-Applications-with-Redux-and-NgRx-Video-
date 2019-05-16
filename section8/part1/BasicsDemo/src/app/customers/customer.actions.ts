import { Action } from '@ngrx/store';

export enum CustomerActionsEnum {
  CustomerAdd = "[Customer] add",
  CustomerLoad = "[Customer] load",
  CustomerRemove = "[Customer] remove",
  CustomerUpdate = "[Customer] update"
}

export class CustomerAdd implements Action {
  type: CustomerActionsEnum.CustomerAdd
  constructor(public payload) {}
}

export class CustomerLoad implements Action {
  type: CustomerActionsEnum.CustomerLoad
  constructor(public payload) { }
}

export class CustomerRemove implements Action {
  type: CustomerActionsEnum.CustomerRemove
  constructor(public payload) { }
}

export class CustomerUpdate implements Action {
  type: CustomerActionsEnum.CustomerUpdate
  constructor(public payload) { }
}

export type CustomerActions = CustomerAdd | CustomerLoad | CustomerRemove | CustomerUpdate;