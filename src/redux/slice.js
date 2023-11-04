import { createSlice } from "@reduxjs/toolkit";
const userslice = createSlice({
  name: "counter",
  initialState: { date: 0, age: 18, name: "" },
  reducers: {
    scheduletime: (state, action) => {
      state.date = action.payload;
    },
    input: (state, action) => {
      state.name = action.payload;
    },
    age: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { scheduletime, input, age } = userslice.actions;
export default userslice.reducer;
