import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from 'redux/actions';

const items = createReducer(
  [],
  builder => {
    builder
      .addCase(actions.fetchContactsFulfilled, (_, action) => action.payload)
      .addCase(actions.addContactFulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(actions.deleteContactFulfilled, (state, action) =>
        state.filter(el => el.id !== action.payload)
      );
  }
  //   { [actions.fetchContactsFulfilled]: (_, action) => action.payload,
  //     [actions.addContactFulfilled]: (state, action) => { state.push(action.payload); },
  //     [actions.deleteContactFulfilled]: (state, action) => state.filter(el => el.id !== action.payload), }
);

const isLoading = createReducer(false, builder => {
  builder
    .addMatcher(
      action => action.type.endsWith('/Pending'),
      () => true
    )
    .addMatcher(
      action => action.type.endsWith('/Fulfilled' || '/Rejected'),
      () => false
    );
});

const error = createReducer(null, builder => {
  builder
    .addMatcher(
      action => action.type.endsWith('/Pending' || '/Fulfilled'),
      () => null
    )
    .addMatcher(
      action => action.type.endsWith('/Rejected'),
      (_, action) => action.payload
    );
});

export const contactsReducer = combineReducers({ items, isLoading, error });
