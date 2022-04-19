import { toast } from "react-toastify";
import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import { getUser, setUser, setUserRole } from "../../../../utils/localStorage";
import baseURL from "../../../../api/api";
import { useDispatch } from "react-redux";

type profileState = {
  userDetail: any;
  userClass: any;
};
const initialState: profileState = {
  userDetail: {},
  userClass: {},
};
export const getStudentUser = createAsyncThunk(
  "users/getStudentUser",
  async (id: string) => {
    const respond = await baseURL.get(`api/student/${id}`);
    return respond.data;
  }
);
export const updateStudentUser = createAsyncThunk(
  "users/updateStudentUser",
  async ({ id, data }: any) => {
    console.log("api: ", data);
    const respond = await baseURL.put(`api/student/${id}`, data);
    return respond.data;
  }
);

export const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentUser.fulfilled, (state, action) => {
        state.userDetail = action.payload.user;
        state.userClass = action.payload.lop_maLop;
        toast.success("Get user success", { autoClose: 2000 });
      })
      .addCase(getStudentUser.rejected, (state) => {
        state.userDetail = {};
        state.userClass = {};
        toast.error("Get user fail", { autoClose: 2000 });
      })
      .addCase(updateStudentUser.fulfilled, (state) => {
        toast.success("Update success", { autoClose: 2000 });
      })
      .addCase(updateStudentUser.rejected, (state) => {
        toast.error("Update fail", { autoClose: 2000 });
      });
  },
});

const { reducer, actions } = profileSlice;
export const {} = actions;
export const profileValue = (state: RootState) => state.profile;
export default reducer;
