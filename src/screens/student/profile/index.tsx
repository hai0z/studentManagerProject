import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { ProfileStudentComponent } from "../../../components";
import { getUser } from "../../../utils/localStorage";
import {
  getStudentUser,
  updateStudentUser,
} from "../../all/profile/redux/profileSlice";

const ProfileStudentScreen = () => {
  const { userDetail, userClass } = useSelector(
    (state: RootState) => state.profile
  );
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState<any>();
  const [valueClass, setValueClass] = useState<any>();
  const dispatch = useDispatch();
  const userId = getUser();
  useEffect(() => {
    dispatch(getStudentUser(userId));
    setValue(userDetail);
    setValueClass(userClass);
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
  const handleOnCancle = () => {
    setValue(userClass);
    setValueClass(userClass);
    setIsEdit(!isEdit);
  };
  const onUpdateValue = (key: string, updateValue: string | Date | null) => {
    setValue({ ...value, [key]: updateValue });
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
    />
  );
};

export default ProfileStudentScreen;
