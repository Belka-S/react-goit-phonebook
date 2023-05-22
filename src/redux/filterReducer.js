import { createReducer } from '@reduxjs/toolkit';
import { setFilterValue } from './actions';

export const filterReducer = createReducer('', {
  [setFilterValue]: (state, action) => action.payload,
});
