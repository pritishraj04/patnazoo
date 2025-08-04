import { configureStore } from "@reduxjs/toolkit";
import zooTiming from "@/features/zootiming-slice";

const store = configureStore({
  reducer: {
    timing: zooTiming, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
