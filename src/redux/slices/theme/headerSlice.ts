// src/redux/slices/theme/headerSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {
  isVisible: boolean;
}

const initialState: HeaderState = {
  isVisible: true
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    showHeader: state => {
      state.isVisible = true;
    },
    hideHeader: state => {
      state.isVisible = false;
    }
  }
});

export const { showHeader, hideHeader } = headerSlice.actions;
export default headerSlice.reducer;
