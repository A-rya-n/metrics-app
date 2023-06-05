import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMetrics = createAsyncThunk(
  "metrics/fetchMetrics",
  async () => {
    try {
      const response = await fetch("http://localhost:5000/cpu");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching metrics: ", error);
      throw error;
    }
  }
);

const initialState = {
  data: [],
  status: "idle",
};

const MetricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMetrics.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = [...state.data, action.payload];
        if (state.data.length > 10) {
          state.data = state.data.slice(1);
        }
      })
      .addCase(fetchMetrics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default MetricsSlice.reducer;
