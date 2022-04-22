import { SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSemester,
  getTeacherClassList,
  getTeacherClassStudentMarksList,
  getTeacherUser,
} from "../../../app/redux";
import { RootState } from "../../../app/store";
import { ScoreModifyComponent } from "../../../components";
import { getUser } from "../../../utils/localStorage";

const ScoreModifyScreen = () => {
  const { teacherClassList, teacherClassStudentMarksList } = useSelector(
    (state: RootState) => state.redux
  );
  const dispatch = useDispatch();
  const userId = getUser();

  useEffect(() => {
    dispatch(getSemester());
    dispatch(getTeacherUser(userId));
    dispatch(getTeacherClassList(userId));
  }, []);
  const [currentSemester, setCurrentSemester] = useState(
    teacherClassList[0]?.maHocKi ? teacherClassList[0]?.maHocKi : ""
  );
  const [currentSubject, setCurrentSubject] = useState(
    teacherClassList[0]?.maHocKi ? teacherClassList[0]?.maHocKi : ""
  );
  const [currentClass, setCurrentClass] = useState(
    teacherClassList[0]?.maLop ? teacherClassList[0]?.maLop : ""
  );
  const [value, setValue] = useState()
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    if (currentSemester !== "" && currentClass !== "" && currentClass !== "") {
      dispatch(
        getTeacherClassStudentMarksList({
          subjectId: currentSubject,
          classId: currentClass,
          semesterId: currentSemester,
        })
      );
    }
  }, [currentSemester, currentSubject, currentClass]);
  const createData = (
    index: number,
    name: string,
    gioiTinh: string,
    ngaySinh: string,
    diemHeSo1: number,
    diemHeSo1_2: number,
    diemHeSo1_3: number,
    diemHeSo1_4: number,
    diemHeSo2: number,
    diemHeSo2_2: number,
    diemHeSo2_3: number,
    diemHeSo3: number,
    trungBinhMon: number
  ) => {
    return {
      index,
      name,
      gioiTinh,
      ngaySinh,
      diemHeSo1,
      diemHeSo1_2,
      diemHeSo1_3,
      diemHeSo1_4,
      diemHeSo2,
      diemHeSo2_2,
      diemHeSo2_3,
      diemHeSo3,
      trungBinhMon,
    };
  };
  const rows =
    teacherClassStudentMarksList &&
    teacherClassStudentMarksList?.map((element: any, index: number) => {
      return createData(
        index + 1,
        element.student.hoTen,
        element.student.gioiTinh ? "Nu" : "Nam",
        element.student.ngaySinh,
        element.diemHeSo1,
        element.diemHeSo1_2,
        element.diemHeSo1_3,
        element.diemHeSo1_4,
        element.diemHeSo2,
        element.diemHeSo2_2,
        element.diemHeSo2_3,
        element.diemHeSo3,
        element.trungBinhMon
      );
    });
  const onChangeSemester = (event: SelectChangeEvent) => {
    setCurrentSemester(event.target.value as string);
  };
  const onChangeClass = (event: SelectChangeEvent) => {
    setCurrentClass(event.target.value as string);
  };
  const onChangeSubject = (event: SelectChangeEvent) => {
    setCurrentSubject(event.target.value as string);
  };
  const handleCancle = () => {
    setIsEdit(false);
  };
  return (
    <ScoreModifyComponent
      rows={rows}
      teacherClassList={teacherClassList}
      currentSemester={currentSemester}
      currentSubject={currentSubject}
      onChangeSemester={onChangeSemester}
      currentClass={currentClass}
      onChangeClass={onChangeClass}
      onChangeSubject={onChangeSubject}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      handleCancle={handleCancle}
    />
  );
};

export default ScoreModifyScreen;
