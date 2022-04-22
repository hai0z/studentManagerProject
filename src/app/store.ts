import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reduxReducer from "./redux"
export const store = configureStore({
  reducer: {
    redux: reduxReducer,

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
