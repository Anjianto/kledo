import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isSidebarOpen: boolean;
};

const initialState: InitialState = {
  isSidebarOpen: false,
};

export const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = utilSlice.actions;
export default utilSlice.reducer;
