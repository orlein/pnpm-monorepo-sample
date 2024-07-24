import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "next-auth";

export type AuthState = {
  session: Session | null;
};

const initialAuthState: AuthState = {
  session: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setSession(state, action: PayloadAction<Pick<AuthState, "session">>) {
      state.session = action.payload.session;
    },
    logout(state) {
      state.session = null;
    },
  },
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
