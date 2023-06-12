import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const MetricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    updateCpuInfo: (state, action) => {
      const fullData = [...state.data, action.payload];
      if (fullData.length > 10) {
        fullData.shift();
      }
      state.data = fullData;
    },
  },
});

export const { updateCpuInfo } = MetricsSlice.actions;
export default MetricsSlice.reducer;
