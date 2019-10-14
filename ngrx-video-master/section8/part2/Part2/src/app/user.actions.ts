import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = "[User] Load Users",
  AddUsers = "[User] Add Users"
}


export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
  constructor(public payload: []) {}
}

export class AddUsers implements Action {
  readonly type = UserActionTypes.AddUsers;
}




export type UserActions = LoadUsers | AddUsers;
