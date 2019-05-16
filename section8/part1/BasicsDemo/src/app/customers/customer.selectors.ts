import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Entity } from '../app-state';
import { Customer } from './customer';

const customersSelector = createFeatureSelector<Entity<Customer>>('customers');

const customerListSelector = createSelector(
  customersSelector, // state.customers.data
  customers => customers.data
)

const customerListErrorSelector = createSelector(
  customersSelector, // state.customers.error
  customers => customers.error
  
);

const customerListLoadingSelector = createSelector(
  customersSelector, // state.customers.loading
  customers => customers.loading
);

export {
  customerListSelector,
  customerListErrorSelector,
  customerListLoadingSelector
  // plus custom selectors...
};