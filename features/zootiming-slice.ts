import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zooTiming: null,
  status: true,
};

const zooTimingSlice = createSlice({
  name: "timing",
  initialState,
  reducers: {
    timing: (state, action) => {
      state.zooTiming = action.payload.zooTiming;
    },
    hidePoster: (state) => {
      state.status = false;
    },
  },
});

export const { timing ,hidePoster} = zooTimingSlice.actions;
export default zooTimingSlice.reducer;
