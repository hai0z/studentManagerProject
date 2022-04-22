import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSemester,
  getStudentUser,
  getTeacherClassList,
  getTeacherUser,
} from "./app/redux";
import { getUser, getUserRole } from "./utils/localStorage";
import { RootState } from "./app/store";

function App() {
  const userId = getUser();
  const userRole = getUserRole();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(getSemester());
      if (userRole === "ROLE_STUDENT") {
        dispatch(getStudentUser(userId));
      }
      if (userRole === "ROLE_TEACHER") dispatch(getTeacherUser(userId));
      dispatch(getTeacherClassList(userId));
    }
  }, []);
  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
