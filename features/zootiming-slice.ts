import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zooTiming: null,
  status: true,
  zooVisit: null,
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
    hideZooVisit: (state, action) => {
      state.zooVisit = action.payload.zooVisit;
    },
  },
});

export const { timing, hidePoster, hideZooVisit } = zooTimingSlice.actions;
export default zooTimingSlice.reducer;
