import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./myValueInitialState";

export const myValueSlice = createSlice({
  name: "myValue",
  initialState,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = myValueSlice.actions;
