import { createReducer } from '@reduxjs/toolkit';
import { setFilterValue } from './actions';

export const filterReducer = createReducer('', {
  [setFilterValue]: (state, action) => action.payload,
});

// ---------------------createSlice--------------------- //

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setFilterValue: (state, action) => action.payload,
//   },
// });
