import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import actAuthLogout from "./act/actAuthLogout";
import { TLoading, isString } from "@/types";

interface IJwtDecoded {
  exp: number;
  iat: number;
  userId: string;
}

interface IAuthState {
  user: {
    _id: number;
    email: string;
    firstName: string;
    lastName: string;
    imageProfile: string;
  } | null;
  token: string | null;
  loading: TLoading;
  error: string | null;
  expiry: number | null;
}

const initialState: IAuthState = {
  user: null,
  token: null,
  loading: "idle",
  error: null,
  expiry: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUI: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    // authLogout: (state) => {
    //   state.user = null;
    //   state.token = null;
    //   state.expiry = null;
    // },
  },
  extraReducers: (builder) => {
    //register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";

      if (isString(action.payload)) state.error = action.payload;
    });

    // login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      const token = action.payload.token;
      const decodedToken: IJwtDecoded = jwtDecode(token);

      state.loading = "succeeded";
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.expiry = decodedToken.exp * 1000; // Store expiry in milliseconds
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) state.error = action.payload;
    });

    // logout
    builder.addCase(actAuthLogout.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogout.fulfilled, (state) => {
      state.loading = "idle";
      state.user = null;
      state.token = null;
      state.expiry = null;
    });
    builder.addCase(actAuthLogout.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) state.error = action.payload;
    });
  },
});

export { actAuthRegister, actAuthLogin, actAuthLogout };
export const { resetUI } = authSlice.actions;
export default authSlice.reducer;
