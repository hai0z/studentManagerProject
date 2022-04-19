import React from "react";
import { ScheduleStudentComponent } from "../../../components";

const ScheduleStudentScreen = () => {
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
  return <ScheduleStudentComponent rowsSchedule={rowsSchedule}/>;
};

export default ScheduleStudentScreen;
