// import { createReducer } from '@reduxjs/toolkit';
// import { setFilterValue } from './actions';

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/setFilterValue':
      return action.payload;

    default:
      return state;
  }
};

// -------------------createReducer------------------- //

// export const filterReducer = createReducer('', {
//   [setFilterValue]: (state, action) => action.payload,
// });

// ---------------------createSlice--------------------- //

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setFilterValue: (state, action) => action.payload,
//   },
// });
