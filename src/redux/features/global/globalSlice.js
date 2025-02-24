import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
  homeTab: "inPlay",
  addBank: false,
  showRegister: false,
  showLogin: false,
  showForgotPassword: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGroup: (state, action) => {
      state.group = action.payload;
    },
    setHomeTab: (state, action) => {
      state.homeTab = action.payload;
    },
    setAddBank: (state, action) => {
      state.addBank = action.payload;
    },
    setShowRegister: (state, action) => {
      state.showRegister = action.payload;
    },
    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },
    setShowForgotPassword: (state, action) => {
      state.showForgotPassword = action.payload;
    },
  },
});

export const {
  setGroup,
  setHomeTab,
  setAddBank,
  setShowRegister,
  setShowLogin,
  setShowForgotPassword,
} = stateSlice.actions;

export default stateSlice.reducer;
