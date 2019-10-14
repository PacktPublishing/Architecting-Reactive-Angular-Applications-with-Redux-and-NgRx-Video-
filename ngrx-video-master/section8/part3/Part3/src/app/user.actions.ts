import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User } from './user.model';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  AddUser = '[User] Add User',
  UpsertUser = '[User] Upsert User',
  AddUsers = '[User] Add Users',
  UpsertUsers = '[User] Upsert Users',
  UpdateUser = '[User] Update User',
  UpdateUsers = '[User] Update Users',
  DeleteUser = '[User] Delete User',
  DeleteUsers = '[User] Delete Users',
  ClearUsers = '[User] Clear Users'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;

  constructor(public payload: { users: User[] }) {}
}

export class AddUser implements Action {
  readonly type = UserActionTypes.AddUser;

  constructor(public payload: { user: User }) {}
}

export class UpsertUser implements Action {
  readonly type = UserActionTypes.UpsertUser;

  constructor(public payload: { user: User }) {}
}

export class AddUsers implements Action {
  readonly type = UserActionTypes.AddUsers;

  constructor(public payload: { users: User[] }) {}
}

export class UpsertUsers implements Action {
  readonly type = UserActionTypes.UpsertUsers;

  constructor(public payload: { users: User[] }) {}
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;

  constructor(public payload: { user: Update<User> }) {}
}

export class UpdateUsers implements Action {
  readonly type = UserActionTypes.UpdateUsers;

  constructor(public payload: { users: Update<User>[] }) {}
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DeleteUser;

  constructor(public payload: { id: string }) {}
}

export class DeleteUsers implements Action {
  readonly type = UserActionTypes.DeleteUsers;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearUsers implements Action {
  readonly type = UserActionTypes.ClearUsers;
}

export type UserActions =
 LoadUsers
 | AddUser
 | UpsertUser
 | AddUsers
 | UpsertUsers
 | UpdateUser
 | UpdateUsers
 | DeleteUser
 | DeleteUsers
 | ClearUsers;
