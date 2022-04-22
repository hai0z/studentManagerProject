import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { getUser, getUserRole } from "../../../utils/localStorage";
import "./styles.scss";
import profile from "../../../assets/profile.png";
import { getStudentUser, getTeacherUser } from "../../../app/redux";
export const ProfilePlateComponent = () => {
  const { userDetail, userClass } = useSelector(
    (state: RootState) => state.redux
  );
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const userId = getUser();
    setRole(getUserRole());
    if (getUserRole() === "ROLE_STUDENT") {
      dispatch(getStudentUser(userId));
    }
    if (getUserRole() === "ROLE_TEACHER") {
      dispatch(getTeacherUser(userId));
    }
  }, []);
  return (
    <Box className="profilePlateContainer">
      <Box className="profilePlateHeader">
        {role === "ROLE_STUDENT" && (
          <Typography variant="h4">Student Profile:</Typography>
        )}
        {role === "ROLE_TEACHER" && (
          <Typography variant="h4">Teacher Profile:</Typography>
        )}
      </Box>
      <Box className="profilePlateContent">
        <Box className="profileImageContainer">
          <img
            width="160px"
            src={userDetail?.img === "" ? profile : userDetail?.img}
          />
        </Box>
        {role === "ROLE_STUDENT" && (
          <Box className="profilePlateDetailContainer">
            <Box className="profilePlateDetailTittle">
              <Typography>ID:</Typography>
              <Typography>Name:</Typography>
              <Typography>Gender:</Typography>
              <Typography>Date of Birth:</Typography>
              <Typography>Address:</Typography>
              <Typography>Class:</Typography>
              <Typography>Year:</Typography>
            </Box>
            <Box className="profilePlateDetail">
              <Typography>{userDetail?.maHs}</Typography>
              <Typography>{userDetail?.hoTen}</Typography>
              <Typography>{userDetail?.gioiTinh ? "Nữ" : "Nam"}</Typography>
              <Typography>{userDetail?.ngaySinh}</Typography>
              <Typography>{userDetail?.diaChi}</Typography>
              <Typography>{userClass?.tenLop}</Typography>
              <Typography>{userClass?.nienKhoa}</Typography>
            </Box>
          </Box>
        )}
        {role === "ROLE_TEACHER" && (
          <Box className="profilePlateDetailContainer">
            <Box className="profilePlateDetailTittle">
              <Typography>ID:</Typography>
              <Typography>Name:</Typography>
              <Typography>Gender:</Typography>
              <Typography>Date of Birth:</Typography>
              <Typography>Address:</Typography>
              <Typography>Mobile Number:</Typography>
              <Typography>Email:</Typography>
              <Typography>Home Class:</Typography>
            </Box>
            <Box className="profilePlateDetail">
              <Typography>{userDetail?.maGiaoVien}</Typography>
              <Typography>{userDetail?.tenGiaoVien}</Typography>
              <Typography>{userDetail?.gioiTinh ? "Nữ" : "Nam"}</Typography>
              <Typography>{userDetail?.ngaySinh}</Typography>
              <Typography>{userDetail?.diaChi}</Typography>
              <Typography>{userDetail?.soDienThoai}</Typography>
              <Typography>{userDetail?.email}</Typography>
              <Typography>{userDetail?.class}</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
