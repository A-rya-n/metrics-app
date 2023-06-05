import { combineReducers, configureStore } from "@reduxjs/toolkit";
import metricsReducer from "./modules/cpu/MetricsSlice";

const rootReducer = combineReducers({
  // All reducers of slices here...
  metrics: metricsReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
