import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import baseURL from "../api/api";
import { setUser, setUserRole } from "../utils/localStorage";

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
type defaultInitialState = {
  userId: string;
  userRole: string;
  userDetail: any;
  userClass: any;
  studentFullMark: any;
  semester: any;
  studentMark: any;
  error: boolean;
  isSuccess: boolean;
  teacherClassList: any;
  teacherClassStudentMarksList: any;
};
const initialState: defaultInitialState = {
  userId: "",
  userRole: "",
  error: false,
  isSuccess: false,
  userDetail: {},
  userClass: {},
  studentMark: [],
  studentFullMark: [],
  semester: [],
  teacherClassList: [],
  teacherClassStudentMarksList: [],
};
//other
export const getSemester = createAsyncThunk("users/getSemester", async () => {
  const respond = await baseURL.get(`api/semester`);
  return respond.data;
});
//student
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
    const respond = await baseURL.put(`api/student/${id}`, data);
    return respond.data;
  }
);
export const updateStudentUserPassword = createAsyncThunk(
  "users/updateStudentUserPassword",
  async ({ id, data }: any) => {
    const respond = await baseURL.put(
      `api/student/change-password/${id}`,
      data
    );
    return respond.data;
  }
);
export const getStudentMarks = createAsyncThunk(
  "users/getStudentMarks",
  async ({ userId, semesterId }: { userId: string; semesterId: string }) => {
    const respond = await baseURL.get(
      `api/student/${userId}/marks/${semesterId}`
    );
    return respond.data;
  }
);
export const getStudentFullMarks = createAsyncThunk(
  "users/getStudentFullMarks",
  async ({ userId, semesterId }: { userId: string; semesterId: string }) => {
    const respond = await baseURL.get(
      `api/student/${userId}/marks/${semesterId}`
    );
    return respond.data;
  }
);

//teacher
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
export const getTeacherUser = createAsyncThunk(
  "users/getTeacherUser",
  async (id: string) => {
    const respond = await baseURL.get(`api/teacher/${id}`);
    return respond.data;
  }
);
export const updateTeacherUser = createAsyncThunk(
  "users/updateTeacherUser",
  async ({ id, data }: any) => {
    const respond = await baseURL.put(`api/teacher/${id}`, data);
    return respond.data;
  }
);
export const getTeacherClassList = createAsyncThunk(
  "users/getTeacherClassList",
  async (userId: string) => {
    const respond = await baseURL.get(`api/teacher/${userId}/class/`);
    return respond.data;
  }
);
export const getTeacherClassStudentMarksList = createAsyncThunk(
  "users/getTeacherClassStudentList",
  async ({
    subjectId,
    classId,
    semesterId,
  }: {
    subjectId: string;
    classId: string;
    semesterId: string;
  }) => {
    const respond = await baseURL.get(
      `api/mark/${subjectId}/${classId}/${semesterId}`
    );
    return respond.data;
  }
);
//admin
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
export const reduxSlice = createSlice({
  name: "redux",
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
    //student
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
      })
      .addCase(getStudentUser.fulfilled, (state, action) => {
        state.userDetail = action.payload.user;
        state.userClass = action.payload.lop_maLop;
        toast.success("Get student success", { autoClose: 2000 });
      })
      .addCase(getStudentUser.rejected, (state) => {
        state.userDetail = {};
        state.userClass = {};
        toast.error("Get student fail", { autoClose: 2000 });
      })
      .addCase(updateStudentUser.fulfilled, (state) => {
        toast.success("Update student success", { autoClose: 2000 });
      })
      .addCase(updateStudentUser.rejected, (state) => {
        toast.error("Update student fail", { autoClose: 2000 });
      })
      .addCase(updateStudentUserPassword.fulfilled, (state) => {
        toast.success("Update student password success", { autoClose: 2000 });
      })
      .addCase(updateStudentUserPassword.rejected, (state) => {
        toast.error("Update student password fail", { autoClose: 2000 });
      })
      .addCase(getStudentMarks.fulfilled, (state, action) => {
        state.studentMark = action.payload.studentMark;
        toast.success("Get marks success", { autoClose: 2000 });
      })
      .addCase(getStudentMarks.rejected, (state) => {
        state.studentMark = [];
        toast.error("Get marks fail", { autoClose: 2000 });
      })
      .addCase(getStudentFullMarks.fulfilled, (state, action) => {
        state.studentFullMark = action.payload.studentMark;
        toast.success("Get marks success", { autoClose: 2000 });
      })
      .addCase(getStudentFullMarks.rejected, (state) => {
        state.studentFullMark = [];
        toast.error("Get marks fail", { autoClose: 2000 });
      })
      .addCase(getSemester.fulfilled, (state, action) => {
        state.semester = action.payload;
        toast.success("Get semester success", { autoClose: 2000 });
      })
      .addCase(getSemester.rejected, (state) => {
        state.semester = [];
        toast.error("Get semester fail", { autoClose: 2000 });
      });
    //teacher
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
      })
      .addCase(getTeacherUser.fulfilled, (state, action) => {
        state.userDetail = action.payload;
        // state.userClass = action.payload.lop_maLop;
        toast.success("Get teacher success", { autoClose: 2000 });
      })
      .addCase(getTeacherUser.rejected, (state) => {
        state.userDetail = {};
        // state.userClass = action.payload.lop_maLop;
        toast.success("Get teacher success", { autoClose: 2000 });
      })
      .addCase(updateTeacherUser.fulfilled, (state) => {
        toast.success("Update teacher success", { autoClose: 2000 });
      })
      .addCase(updateTeacherUser.rejected, (state) => {
        toast.success("Update teacher success", { autoClose: 2000 });
      })
      .addCase(getTeacherClassList.fulfilled, (state, action) => {
        state.teacherClassList = action.payload;
        toast.success("Get class list success", { autoClose: 2000 });
      })
      .addCase(getTeacherClassList.rejected, (state) => {
        // state.studentMark = [];
        toast.error("Get class list fail", { autoClose: 2000 });
      })
      .addCase(getTeacherClassStudentMarksList.fulfilled, (state, action) => {
        //////
        state.teacherClassStudentMarksList = action.payload;
        toast.success(
          "Get all score for student in semester in class success",
          { autoClose: 2000 }
        );
      })
      .addCase(getTeacherClassStudentMarksList.rejected, (state) => {
        // state.studentMark = [];
        toast.error("Get all score for student in semester in class fail", {
          autoClose: 2000,
        });
      });
    //admin
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

const { reducer, actions } = reduxSlice;
export const { signoutSuccess } = actions;
export const profileValue = (state: RootState) => state.redux;
export default reducer;
