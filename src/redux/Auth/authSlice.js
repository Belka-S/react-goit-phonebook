import { createSlice } from '@reduxjs/toolkit';
import * as operations from 'redux/Auth/authOperations';

const initialState = {
  user: { username: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleAuth = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogout = state => initialState;

const handleRefreshSucsess = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleRefreshPending = state => {
  state.isRefreshing = true;
};

const handleRefreshError = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(operations.registerThunk.fulfilled, handleAuth)
      .addCase(operations.loginThunk.fulfilled, handleAuth)
      .addCase(operations.logoutThunk.fulfilled, handleLogout)
      .addCase(operations.refreshThunk.fulfilled, handleRefreshSucsess)
      .addCase(operations.refreshThunk.pending, handleRefreshPending)
      .addCase(operations.refreshThunk.rejected, handleRefreshError);
  },
});

export const authReducer = authSlice.reducer;
