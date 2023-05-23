import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from 'redux/actions';

const items = createReducer([], {
  // fetch Contacts
  [actions.fetchContactsFulfilled]: (_, action) => action.payload,
  // add Contact
  [actions.addContactFulfilled]: (state, action) => {
    state.push(action.payload);
  },
  // delete Contact
  [actions.deleteContactFulfilled]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

const isLoading = createReducer(false, {
  // fetch Contacts
  [actions.fetchContactsPending]: () => true,
  [actions.fetchContactsFulfilled]: () => false,
  [actions.fetchContactsRejected]: () => false,
  // add Contact
  [actions.addContactPending]: () => true,
  [actions.addContactFulfilled]: () => false,
  [actions.addContactRejected]: () => false,
  // delete Contact
  [actions.deleteContactPending]: () => true,
  [actions.deleteContactFulfilled]: () => false,
  [actions.deleteContactRejected]: () => false,
});

const error = createReducer(false, {
  // fetch Contacts
  [actions.fetchContactsPending]: () => null,
  [actions.fetchContactsFulfilled]: () => null,
  [actions.fetchContactsRejected]: (_, action) => action.payload,
  // add Contact
  [actions.addContactPending]: () => null,
  [actions.addContactFulfilled]: () => null,
  [actions.addContactRejected]: (_, action) => action.payload,
  // delete Contact
  [actions.deleteContactPending]: () => null,
  [actions.deleteContactFulfilled]: () => null,
  [actions.deleteContactRejected]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({ items, isLoading, error });
