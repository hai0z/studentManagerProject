import React from "react";
import { HomeTeacherComponent } from "../../../components";
import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { getUser } from "../../../utils/localStorage";
import {
  getSemester,
  getTeacherClassList,
  getTeacherClassStudentMarksList,
  getTeacherUser,
} from "../../../app/redux";

const HomeTeacherScreen = () => {
  // const { studentFullMark, semeseter } = useSelector(
  //   (state: RootState) => state.personalScore
  // );
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
  useEffect(() => {
    if (
      currentSemester !== "" &&
      currentClass !== "" &&
      currentSubject !== ""
    ) {
      dispatch(
        getTeacherClassStudentMarksList({
          subjectId: currentSubject,
          classId: currentClass,
          semesterId: currentSemester,
        })
      );
    }
  }, [currentSemester, currentSubject, currentClass]);
  const createData = (name: string, avgScore: number) => {
    return { name, avgScore };
  };
  const rows =
    teacherClassStudentMarksList &&
    teacherClassStudentMarksList?.map((element: any) => {
      return createData(element.student.hoTen, element.trungBinhMon);
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
  const createScheduleData = (
    peroid: string,
    mon: string,
    tues: string,
    wed: string,
    thurs: string,
    fri: string,
    sat: string,
    sun: string
  ) => {
    return { peroid, mon, tues, wed, thurs, fri, sat, sun };
  };
  const rowsSchedule = [
    createScheduleData("01", "Chào cờ", "", "", "", "", "", ""),
    createScheduleData("02", "", "", "", "", "", "", ""),
    createScheduleData("03", "", "", "", "", "", "", ""),
    createScheduleData("04", "", "", "", "", "", "", ""),
    createScheduleData("05", "", "", "", "", "", "", ""),
    createScheduleData("06", "", "", "", "", "", "", ""),
    createScheduleData("07", "", "", "", "", "", "", ""),
    createScheduleData("08", "", "", "", "", "", "", ""),
    createScheduleData("09", "", "", "", "", "", "", ""),
    createScheduleData("10", "", "", "", "", "", "", ""),
  ];
  return (
    <HomeTeacherComponent
      rows={rows}
      rowsSchedule={rowsSchedule}
      teacherClassList={teacherClassList}
      currentSemester={currentSemester}
      currentSubject={currentSubject}
      onChangeSemester={onChangeSemester}
      currentClass={currentClass}
      onChangeClass={onChangeClass}
      onChangeSubject={onChangeSubject}
    />
  );
};

export default HomeTeacherScreen;
