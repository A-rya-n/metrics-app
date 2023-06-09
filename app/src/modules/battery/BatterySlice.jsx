import { createSlice } from "@reduxjs/toolkit";

const BatterySlice = createSlice({
  name: "batteryInfo",
  initialState: {
    data: [],
  },
  reducers: {
    updateBatteryInfo: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateBatteryInfo } = BatterySlice.actions;
export default BatterySlice.reducer;
