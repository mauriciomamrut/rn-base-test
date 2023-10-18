/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { loginSuccess, signOut } from '../slices/authSlice';

export interface NavSliceState {
  isLogged: boolean;
  neverSignedIn: boolean;
}

const authInitialState: NavSliceState = {
  isLogged: true,
  neverSignedIn: true,
};

const nav = createSlice({
  name: 'nav',
  initialState: authInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginSuccess, state => {
      state.isLogged = true;
    });
    builder.addCase(signOut, state => {
      state.isLogged = false;
    });
  },
});

export default nav.reducer;
