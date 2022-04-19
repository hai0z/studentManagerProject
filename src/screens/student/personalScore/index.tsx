import { SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { PersonalScoreComponent } from "../../../components";
import { getUser } from "../../../utils/localStorage";
import {
  getStudentFullMarks,
  getStudentSemester,
} from "./redux/personalScoreSlice";

const PersonalScoreScreen = () => {
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
    dispatch(
      getStudentFullMarks({ userId: userId, semesterId: currentSemester })
    );
  }, [currentSemester]);
  const onChange = (event: SelectChangeEvent) => {
    setCurrentSemester(event.target.value as string);
  };
  const createData = (
    name: string,
    diemHeSo1: number,
    diemHeSo1_2: number,
    diemHeSo1_3: number,
    diemHeSo1_4: number,
    diemHeSo2: number,
    diemHeSo2_2: number,
    diemHeSo2_3: number,
    diemHeSo3: number,
    trungBinhMon: number
  ): {
    name: string;
    diemHeSo1: number;
    diemHeSo1_2: number;
    diemHeSo1_3: number;
    diemHeSo1_4: number;
    diemHeSo2: number;
    diemHeSo2_2: number;
    diemHeSo2_3: number;
    diemHeSo3: number;
    trungBinhMon: number;
  } => {
    return {
      name,
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

  const rows = studentFullMark
    ? studentFullMark.map((element: any) => {
        return createData(
          element.monHoc_maMonHoc.tenMonHoc,
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
      })
    : studentMark.map((element: any) => {
        return createData(
          element.monHoc_maMonHoc.tenMonHoc,
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

  return (
    <PersonalScoreComponent
      onChange={onChange}
      rows={rows}
      currentSemester={currentSemester}
      studentSemester={studentSemester}
    />
  );
};

export default PersonalScoreScreen;
