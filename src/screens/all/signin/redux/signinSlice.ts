import { toast } from "react-toastify";
import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import { setUser, setUserRole } from "../../../../utils/localStorage";
import baseURL from "../../../../api/api";

type defaultStudentSignin = {
  maHs: string;
  password: string;
};
type defaultTeacherSignin = {
  maGiaoVien: string;
  password: string;
};
type defaultAdminSignin = {
  username: string;
  password: string;
};
const initialState = {
  userId: "",
  userRole: "",
  error: false,
  isSuccess: false,
};
export const getStudentSignin = createAsyncThunk(
  "users/getStudentSignin",
  async (signinInfo: defaultStudentSignin, ThunkAPI) => {
    try {
      const response = await baseURL.post("/api/login/student", signinInfo);
      return response.data;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getTeacherSignin = createAsyncThunk(
  "users/getTeacherSignin",
  async (signinInfo: defaultTeacherSignin, ThunkAPI) => {
    try {
      const response = await baseURL.post("/api/login/teacher", signinInfo);
      return response.data;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getAdminSignin = createAsyncThunk(
  "users/getAdminSignin",
  async (signinInfo: defaultAdminSignin, ThunkAPI) => {
    try {
      const response = await baseURL.post("/api/login/admin", signinInfo);
      return response.data;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.response.data);
    }
  }
);
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentSignin.fulfilled, (state, action) => {
        state.userRole = action.payload.role;
        state.error = false;
        state.isSuccess = true;
        setUser(action.payload.user.maHs);
        setUserRole("ROLE_STUDENT");
        toast.success("login success", { autoClose: 2000 });
      })
      .addCase(getStudentSignin.rejected, (state, action: any) => {
        state.userRole = "";
        state.error = true;
        state.isSuccess = false;
        localStorage.removeItem("user");
        toast.error(action.payload.message, { autoClose: 2000 });
      });
    builder
      .addCase(getTeacherSignin.fulfilled, (state, action) => {
        state.userRole = action.payload.role;
        state.error = false;
        state.isSuccess = true;
        setUserRole("ROLE_TEACHER");
        setUser(action.payload.user.maGiaoVien);
        toast.success("login success", { autoClose: 2000 });
      })
      .addCase(getTeacherSignin.rejected, (state, action: any) => {
        state.userRole = "";
        state.error = true;
        state.isSuccess = false;
        localStorage.removeItem("user");
        toast.error(action.payload.message, { autoClose: 2000 });
      });
    builder
      .addCase(getAdminSignin.fulfilled, (state, action) => {
        state.userRole = action.payload.role;
        state.error = false;
        state.isSuccess = true;
        setUserRole("ROLE_ADMIN");
        setUser(action.payload.user.username);
        toast.success("login success", { autoClose: 2000 });
      })
      .addCase(getAdminSignin.rejected, (state, action: any) => {
        state.userRole = "";
        state.error = true;
        state.isSuccess = false;
        localStorage.removeItem("user");
        toast.error(action.payload.message, { autoClose: 2000 });
      });
  },
});

const { reducer, actions } = signinSlice;
export const { signoutSuccess } = actions;
export const signinValue = (state: RootState) => state.signin;
export default reducer;
