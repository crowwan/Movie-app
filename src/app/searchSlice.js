import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setValue(_, action) {
      return action.payload;
    },
  },
});

export const { setValue } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
