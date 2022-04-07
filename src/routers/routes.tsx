import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { RootState } from "../app/store";
import { Navbar } from "../components";
import {
  DashBoardScreen,
  HomeStudentScreen,
  PersonalScoreScreen,
  ProfileStudentScreen,
  ScheduleStudentScreen,
  SignInScreen,
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
          <Route path="/home"></Route>
        </Switch>
      )}
      {userRole === "ROLE_ADMIN" && (
        <Switch>
          <Route path="/home"></Route>
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
