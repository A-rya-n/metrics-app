import { combineReducers, configureStore } from "@reduxjs/toolkit";
import metricsReducer from "./modules/cpu/MetricsSlice";
import sidebarReducer from "./modules/sidebar/SidebarSlice";

const rootReducer = combineReducers({
  // All reducers of slices here...
  metrics: metricsReducer,
  sidebar: sidebarReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
