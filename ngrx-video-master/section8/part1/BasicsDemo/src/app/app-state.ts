import { Customer } from "./customers/customer";

// the global state
export interface AppState {
  customers: Entity<Customer>;
}

export interface Entity<T> {
  loading: boolean;
  data: T[];
  error: any;
}
