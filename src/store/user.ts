/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "src/api/auth/auth";

type InitialState = {
  user: User | null;
  tokenType: string;
};

const initialState: InitialState = {
  user: null,
  tokenType: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setTokenType: (state, action: PayloadAction<string>) => {
      state.tokenType = action.payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      if (Object.keys(state).length < 0) {
        state.user = {
          ...action.payload,
        };
        return;
      }
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    resetUser: (state) => {
      state.user = null;
    },
    resetTokenType: (state) => {
      state.tokenType = "";
    },
  },
});

export const { resetUser, setUser, updateUser, resetTokenType, setTokenType } =
  userSlice.actions;
export default userSlice.reducer;
