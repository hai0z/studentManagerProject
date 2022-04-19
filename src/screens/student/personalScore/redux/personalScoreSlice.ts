import { toast } from "react-toastify";
import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import baseURL from "../../../../api/api";

type personalScoreState = {
  studentFullMark: any;
  studentSemester: any;
};
const initialState: personalScoreState = {
  studentFullMark: [],
  studentSemester: [],
};
export const getStudentFullMarks = createAsyncThunk(
  "users/getStudentMarks",
  async ({ userId, semesterId }: { userId: string; semesterId: string }) => {
    const respond = await baseURL.get(
      `api/student/${userId}/marks/${semesterId}`
    );
    return respond.data;
  }
);
export const getStudentSemester = createAsyncThunk(
  "users/getStudentSemester",
  async () => {
    const respond = await baseURL.get(`api/semester`);
    return respond.data;
  }
);
export const personalScoreSlice = createSlice({
  name: "personalScore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentFullMarks.fulfilled, (state, action) => {
        state.studentFullMark = action.payload.studentMark;
        toast.success("Get marks success", { autoClose: 2000 });
      })
      .addCase(getStudentFullMarks.rejected, (state) => {
        state.studentFullMark = [];
        toast.error("Get marks fail", { autoClose: 2000 });
      })
      .addCase(getStudentSemester.fulfilled, (state, action) => {
        state.studentSemester = action.payload;
        toast.success("Get semester success", { autoClose: 2000 });
      })
      .addCase(getStudentSemester.rejected, (state) => {
        state.studentSemester = [];
        toast.error("Get semester fail", { autoClose: 2000 });
      });
  },
});

const { reducer, actions } = personalScoreSlice;
export const {} = actions;
export const profileValue = (state: RootState) => state.personalScore;
export default reducer;
