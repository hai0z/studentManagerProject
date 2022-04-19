import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../app/store";
import { SignInComponent } from "../../../components";
import { users } from "../../../utils/constants";
import { setPath, setUser, setUserRole } from "../../../utils/localStorage";
import {
  getAdminSignin,
  getStudentSignin,
  getTeacherSignin,
} from "./redux/signinSlice";

const DEFAULT_VALUE = {
  maHs: "",
  maGiaoVien: "",
  username: "",
  password: "",
};
const SignInScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { error, isSuccess } = useSelector((state: RootState) => state.signin);
  const [value, setValue] = useState(DEFAULT_VALUE);
  const [page, setPage] = useState("1");

  const handleChangePage = (event: React.SyntheticEvent, newValue: string) => {
    setPage(newValue);
  };
  const onUpdateValue = (key: string, updateValue: string) => {
    setValue({ ...value, [key]: updateValue });
  };

  const onSubmitStudent = async () => {
    //call API
    dispatch(getStudentSignin({ maHs: value.maHs, password: value.password }));
  };
  const onSubmitTeacher = async () => {
    //call API
    dispatch(
      getTeacherSignin({
        maGiaoVien: value.maGiaoVien,
        password: value.password,
      })
    );
  };
  const onSubmitAdmin = async () => {
    //call API
    dispatch(
      getAdminSignin({ username: value.username, password: value.password })
    );
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
      page={page}
      onUpdateValue={onUpdateValue}
      handleChangePage={handleChangePage}
      onSubmitStudent={onSubmitStudent}
      onSubmitTeacher={onSubmitTeacher}
      onSubmitAdmin={onSubmitAdmin}
    />
  );
};

export default SignInScreen;
