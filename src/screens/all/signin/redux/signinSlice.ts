import { toast } from "react-toastify";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import { setUser, setUserRole } from "../../../../utils/localStorage";

const initialState = {
  userRole: "",
  error: false,
  isSuccess: false,
};
export const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    signoutSuccess: (state) => {
      state.userRole = "";
      state.error = false;
      state.isSuccess = false;
      localStorage.removeItem("user");
      localStorage.removeItem("userRole");
    },
    signinSuccess: (state, action) => {
      console.log(action);
      state.userRole = action.payload.role;
      state.error = false;
      state.isSuccess = true;
      setUser(action.payload.userID);
      setUserRole(action.payload.role);
    },
    signinFail: (state) => {
      state.userRole = "";
      state.error = true;
      state.isSuccess = false;
      localStorage.removeItem("user");
    },
  },
});

const { reducer, actions } = signinSlice;
export const { signoutSuccess, signinSuccess, signinFail } = actions;
export const signinValue = (state: RootState) => state.signin;
export default reducer;
