import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const MetricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    setMetrics: (state, action) => {
      state.metrics = action.payload;
    },
  },
});

export const { setMetrics } = MetricsSlice.actions;
export default MetricsSlice.reducer;
