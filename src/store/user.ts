import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "src/api/auth/auth";

type InitialState = {
  user: User | {};
  tokenType: string;
};

const initialState: InitialState = {
  user: {},
  tokenType: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
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
      state.user = {};
    },
    resetTokenType: (state) => {
      state.tokenType = "";
    },
  },
});

export const { resetUser, setUser, updateUser, resetTokenType, setTokenType } =
  userSlice.actions;
export default userSlice.reducer;
