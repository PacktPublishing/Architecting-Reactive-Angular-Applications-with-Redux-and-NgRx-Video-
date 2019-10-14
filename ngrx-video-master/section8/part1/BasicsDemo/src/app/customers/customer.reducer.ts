import {
  CustomerActions,
  CustomerAdd,
  CustomerActionsEnum
} from "./customer.actions";

export function customersReducer(state = [], action: CustomerActions) {
  switch (action.type) {
    case CustomerActionsEnum.CustomerAdd:
      return [...state, {...action.payload}];
    // and so on...
  }
}
