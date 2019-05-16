export interface State {
  loading: boolean;
  data: [];
  error;
}

export const initialState: State = {
  loading: false,
  data: [],
  error: void 0
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}