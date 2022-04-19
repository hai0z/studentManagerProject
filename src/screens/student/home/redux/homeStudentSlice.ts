import { toast } from "react-toastify";
import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import baseURL from "../../../../api/api";

type homeState = {
  studentMark: any;
};
const initialState: homeState = {
  studentMark: [],
};
export const getStudentMarks = createAsyncThunk(
  "users/getStudentMarks",
  async ({ userId, semesterId }: { userId: string; semesterId: string }) => {
    const respond = await baseURL.get(`api/student/${userId}/marks/${semesterId}`);
    return respond.data;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentMarks.fulfilled, (state, action) => {
        state.studentMark = action.payload.studentMark;
        toast.success("Get marks success", { autoClose: 2000 });
      })
      .addCase(getStudentMarks.rejected, (state) => {
        state.studentMark = [];
        toast.error("Get marks fail", { autoClose: 2000 });
      });
  },
});

const { reducer, actions } = homeSlice;
export const {} = actions;
export const profileValue = (state: RootState) => state.homeStudent;
export default reducer;
