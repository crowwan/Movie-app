import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setValue(_, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { setValue } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
