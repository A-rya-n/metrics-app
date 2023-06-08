import { createSlice } from "@reduxjs/toolkit";

const MemorySlice = createSlice({
  name: "memoryInfo",
  initialState: {
    data: [],
  },
  reducers: {
    updateMemoryInfo: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateMemoryInfo } = MemorySlice.actions;
export default MemorySlice.reducer;
