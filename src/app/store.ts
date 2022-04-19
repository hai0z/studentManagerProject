import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import signinReducer from "../screens/all/signin/redux/signinSlice";
import profileReducer from "../screens/all/profile/redux/profileSlice";
import homeStudentReducer from "../screens/student/home/redux/homeStudentSlice";
import personalScoreReducer from "../screens/student/personalScore/redux/personalScoreSlice"
export const store = configureStore({
  reducer: {
    signin: signinReducer,
    profile: profileReducer,
    homeStudent: homeStudentReducer,
    personalScore: personalScoreReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
