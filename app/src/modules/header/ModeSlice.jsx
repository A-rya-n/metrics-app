import { createSlice } from "@reduxjs/toolkit";

const ModeSlice = createSlice({
  name: "mode",
  initialState: {
    selected: false,
  },
  reducers: {
    toggle: (state) => {
      state.selected = !state.selected;
    },
  },
});

export const { toggle } = ModeSlice.actions;
export default ModeSlice.reducer;
