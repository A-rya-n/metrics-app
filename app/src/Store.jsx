import { combineReducers, configureStore } from "@reduxjs/toolkit";
import metricsReducer from "./modules/cpu/MetricsSlice";
import sidebarReducer from "./modules/sidebar/SidebarSlice";
import modeReducer from "./modules/header/ModeSlice";
import smetricsReducer from "./modules/cpu/SMetricsSlice";
import memoryReducer from "./modules/memory/MemorySlice";

const rootReducer = combineReducers({
  // All reducers of slices here...
  metrics: metricsReducer,
  sidebar: sidebarReducer,
  mode: modeReducer,
  smetrics: smetricsReducer,
  memoryInfo: memoryReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
