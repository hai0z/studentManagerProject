import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { RootState } from "../app/store";
import { Navbar } from "../components";
import {
  ClassListScreen,
  ClassManagerScreen,
  ConductScreen,
  DashBoardScreen,
  HomeAdminScreen,
  HomeStudentScreen,
  HomeTeacherScreen,
  PersonalScoreScreen,
  ProfileStudentScreen,
  ScheduleManagerScreen,
  ScheduleStudentScreen,
  ScoreManagerScreen,
  ScoreModifyScreen,
  SignInScreen,
  TeacherScheduleScreen,
  UserManagerScreen,
} from "../screens";
import { getPath, getUserRole } from "../utils/localStorage";

const Routes = () => {
  const { isSuccess } = useSelector((state: RootState) => state.signin);
  const [userRole, setUserRole] = useState(getUserRole());
  const [path, setPath] = useState(getPath());
  const location = useLocation();
  useEffect(() => {
    setUserRole(getUserRole());
    setPath(getPath());
  }, [isSuccess]);
  return (
    <Switch>
      <Route path="/signin">
        <SignInScreen />
      </Route>

      {userRole !== null && (
        <Route path="/dashboard">
          <DashBoardScreen />
        </Route>
      )}
      {userRole === "ROLE_STUDENT" && (
        <Switch>
          <Navbar>
            <Route path="/home" key="home">
              <HomeStudentScreen />
            </Route>
            <Route path="/score" key="score">
              <PersonalScoreScreen />
            </Route>
            <Route path="/profile" key="profile">
              <ProfileStudentScreen />
            </Route>
            <Route path="/schedule" key="schedule">
              <ScheduleStudentScreen />
            </Route>
          </Navbar>
        </Switch>
      )}
      {userRole === "ROLE_TEACHER" && (
        <Switch>
          <Navbar>
            <Route path="/home" key="home">
              <HomeTeacherScreen />
            </Route>
          </Navbar>
          <Navbar>
            <Route path="/classList" key="classList">
              <ClassListScreen />
            </Route>
          </Navbar>
          <Navbar>
            <Route path="/conduct" key="conduct">
              <ConductScreen />
            </Route>
          </Navbar>
          <Navbar>
            <Route path="/schedule" key="schedule">
              <TeacherScheduleScreen />
            </Route>
          </Navbar>
          <Navbar>
            <Route path="/scoreModify" key="scoreModify">
              <ScoreModifyScreen />
            </Route>
          </Navbar>
        </Switch>
      )}
      {userRole === "ROLE_ADMIN" && (
        <Switch>
          <Navbar>
            <Route path="/home" key="home">
              <HomeAdminScreen />
            </Route>
          </Navbar>
          <Navbar>
            <Route path="/classManager" key="classManager">
              <ClassManagerScreen />
            </Route>
          </Navbar>
          <Navbar>
            <Route path="/scheduleManager" key="scheduleManager">
              <ScheduleManagerScreen />
            </Route>
          </Navbar>
          <Navbar>
            <Route path="/scoreManager" key="scoreManager">
              <ScoreManagerScreen />
            </Route>
          </Navbar>
          <Navbar>
            <Route path="/usersManager" key="usersManager">
              <UserManagerScreen />
            </Route>
          </Navbar>
        </Switch>
      )}
      <Route path="/*">
        {userRole === null ? (
          <Redirect to="/signin" />
        ) : (
          <Redirect to={path === null ? "/home" : path} />
        )}
      </Route>
    </Switch>
  );
};
export default Routes;
