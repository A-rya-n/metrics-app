import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSMetrics = createAsyncThunk(
  "smetrics/fetchSMetrics",
  async () => {
    try {
      const response = await fetch("http://localhost:5000/Scpu");
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

const SMetricsSlice = createSlice({
  name: "smetrics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSMetrics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSMetrics.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = [...state.data, action.payload];
        if (state.data.length === 2) {
          state.data = state.data.slice(1);
        }
      })
      .addCase(fetchSMetrics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default SMetricsSlice.reducer;
