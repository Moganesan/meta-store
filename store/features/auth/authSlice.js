import { createSlice } from "@reduxjs/toolkit";

const authState = {
  auth: false,
  loading: true,
  data: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    authenticateUser: (state, action) => {
      state.loading = false;
      state.auth = true;
      state.data = action.payload;
    },

    unauthorizeUser: (state) => {
      state.loading = false;
      state.auth = false;
      state.data = {};
    },
  },
});

const { reducer } = authSlice;

export const {
  setLoadingTrue,
  setLoadingFalse,
  authenticateUser,
  unauthorizeUser,
} = authSlice.actions;

export default reducer;
