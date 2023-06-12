import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const SMetricsSlice = createSlice({
  name: "smetrics",
  initialState,
  reducers: {
    updateScpuInfo: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateScpuInfo } = SMetricsSlice.actions;
export default SMetricsSlice.reducer;
