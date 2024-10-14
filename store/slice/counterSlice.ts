import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  refMain: {
    name: 'Overview',
    id: '',
  },
  burger: false,
};

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    setRefMain(state, action) {
      state.refMain = action.payload;
    },
    setBurger(state, action) {
      state.burger = action.payload;
    },
  },
});

export const { setRefMain, setBurger } = counterSlice.actions;
