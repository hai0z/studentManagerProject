import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../app/store";
import { SignInComponent } from "../../../components";
import { users } from "../../../utils/constants";
import { setPath, setUser, setUserRole } from "../../../utils/localStorage";
import { signinFail, signinSuccess } from "./redux/signinSlice";

const DEFAULT_VALUE = {
  emailAddress: "",
  password: "",
};
const SignInScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { error, isSuccess } = useSelector((state: RootState) => state.signin);
  const [value, setValue] = useState(DEFAULT_VALUE);
  const onUpdateValue = (key: string, updateValue: string) => {
    setValue({ ...value, [key]: updateValue });
  };
  const onSubmit = () => {
    let counter = users.length;
    users.forEach((user) => {
      if (
        value.emailAddress === user.emailAddress &&
        value.password === user.password
      ) {
        dispatch(signinSuccess(user));
      } else {
        counter--;
      }
    });
    if (counter === 0) {
      dispatch(signinFail());
    }
  };
  useEffect(() => {
    if (isSuccess) {
      setPath("/dashboard");
      history.push("/dashboard");
    }
  }, [isSuccess]);
  console.log(value, error, isSuccess);
  return (
    <SignInComponent
      error={error}
      onUpdateValue={onUpdateValue}
      onSubmit={onSubmit}
    />
  );
};

export default SignInScreen;
