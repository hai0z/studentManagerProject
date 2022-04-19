import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { string } from "yup";
import { RootState } from "../../../app/store";
import { HomeStudentComponent } from "../../../components";
import { getUser } from "../../../utils/localStorage";
import {
  getStudentFullMarks,
  getStudentSemester,
} from "../personalScore/redux/personalScoreSlice";
import { getStudentMarks } from "./redux/homeStudentSlice";

const HomeStudentScreen = () => {
  const { studentFullMark, studentSemester } = useSelector(
    (state: RootState) => state.personalScore
  );
  const { studentMark } = useSelector((state: RootState) => state.homeStudent);
  const dispatch = useDispatch();
  const userId = getUser();
  const [currentSemester, setCurrentSemester] = useState("1(2021-2022)");
  useEffect(() => {
    dispatch(getStudentSemester());
  }, []);
  useEffect(() => {
    dispatch(getStudentMarks({ userId: userId, semesterId: currentSemester }));
  }, []);
  useEffect(() => {
    dispatch(
      getStudentFullMarks({ userId: userId, semesterId: currentSemester })
    );
  }, [currentSemester]);
  const createData = (name: string, avgScore: number) => {
    return { name, avgScore };
  };
  const rows = studentFullMark
    ? studentFullMark.map((element: any) => {
        return createData(
          element.monHoc_maMonHoc.tenMonHoc,
          element.trungBinhMon
        );
      })
    : studentMark.map((element: any) => {
        return createData(
          element.monHoc_maMonHoc.tenMonHoc,
          element.trungBinhMon
        );
      });
  const onChange = (event: SelectChangeEvent) => {
    setCurrentSemester(event.target.value as string);
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
    createScheduleData("01", "Chào cờ", "QPAN", "Tin học", "Vật lý", "Toán", "Anh", ""),
    createScheduleData("02", "Hóa", "Vật lý", "Văn", "Hóa", "Toán", "Lịch sử", ""),
    createScheduleData("03", "Sinh", "Công dân", "Toán", "Anh", "Địa lý", "Vật lý", ""),
    createScheduleData("04", "Công nghệ", "Địa lý", "Toán", "Anh", "Văn", "Hóa", ""),
    createScheduleData("05", "Tin học", "", "", "", "Văn", "Sinh Hoạt", ""),
    createScheduleData("06", "", "", "", "", "", "", ""),
    createScheduleData("07", "", "", "", "", "", "", ""),
    createScheduleData("08", "", "", "", "", "", "", ""),
    createScheduleData("09", "", "", "", "", "", "", ""),
    createScheduleData("10", "", "", "", "", "", "", ""),
  ];
  return (
    <HomeStudentComponent
      onChange={onChange}
      rows={rows}
      rowsSchedule={rowsSchedule}
      currentSemester={currentSemester}
      studentSemester={studentSemester}
    />
  );
};

export default HomeStudentScreen;
