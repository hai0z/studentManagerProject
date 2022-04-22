import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentUser,
  updateStudentUser,
  updateStudentUserPassword,
} from "../../../app/redux";
import { RootState } from "../../../app/store";
import { ProfileStudentComponent } from "../../../components";
import { getUser, getUserRole } from "../../../utils/localStorage";

const ProfileStudentScreen = () => {
  const { userDetail, userClass } = useSelector(
    (state: RootState) => state.redux
  );
  const [isEdit, setIsEdit] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);
  const [value, setValue] = useState<any>();
  const [valueClass, setValueClass] = useState<any>();
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const userId = getUser();
  useEffect(() => {
    setValue(userDetail);
    setValueClass(userClass);
    dispatch(getStudentUser(userId));
  }, []);

  const handleOnSubmit = () => {
    const newValue = {
      ngaySinh: moment(JSON.parse(JSON.stringify(value.ngaySinh))).format(
        "YYYY-MM-DD"
      ),
      diaChi: value.diaChi,
      queQuan: value.queQuan,
    };
    dispatch(updateStudentUser({ id: userId, data: newValue }));
    window.location.reload();
  };
  const handleOnSubmitPasswordChange = () => {
    let count = 0;
    if (password.newPassword !== password.confirmPassword) {
      count++;
    }
    if (password.currentPassword === password.newPassword) {
      count++;
    }
    if (
      password.newPassword === "" ||
      password.confirmPassword === "" ||
      password.currentPassword === ""
    ) {
      count++;
    }
    if (count === 0) {
      dispatch(
        updateStudentUserPassword({
          id: userId,
          data: {
            oldPassword: password.currentPassword,
            newPassword: password.newPassword,
          },
        })
      );
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  const handleOnCancle = () => {
    setValue(userClass);
    setValueClass(userClass);
    setIsEdit(false);
    setIsEditPassword(false);
  };
  const onUpdateValue = (key: string, updateValue: string | Date | null) => {
    setValue({ ...value, [key]: updateValue });
  };
  const onUpdatePassword = (key: string, updateValue: string) => {
    setPassword({ ...password, [key]: updateValue });
  };
  const onUpdateValueClass = (key: string, updateValue: string) => {
    setValueClass({ ...valueClass, [key]: updateValue });
  };
  return (
    <ProfileStudentComponent
      userDetail={userDetail}
      userClass={userClass}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      handleOnSubmit={handleOnSubmit}
      onUpdateValue={onUpdateValue}
      value={value}
      valueClass={valueClass}
      onUpdateValueClass={onUpdateValueClass}
      handleOnCancle={handleOnCancle}
      isEditPassword={isEditPassword}
      setIsEditPassword={setIsEditPassword}
      password={password}
      onUpdatePassword={onUpdatePassword}
      isError={isError}
      handleOnSubmitPasswordChange={handleOnSubmitPasswordChange}
    />
  );
};

export default ProfileStudentScreen;
