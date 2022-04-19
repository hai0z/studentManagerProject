import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { HomeStudentComponent } from "../../../components";
import { getUser } from "../../../utils/localStorage";
import { getStudentFullMarks, getStudentSemester } from "../personalScore/redux/personalScoreSlice";
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
  return (
    <HomeStudentComponent
      onChange={onChange}
      rows={rows}
      currentSemester={currentSemester}
      studentSemester={studentSemester}
    />
  );
};

export default HomeStudentScreen;
