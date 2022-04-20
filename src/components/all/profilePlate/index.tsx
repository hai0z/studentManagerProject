import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { getStudentUser } from "../../../screens/all/profile/redux/profileSlice";
import { getUser } from "../../../utils/localStorage";
import "./styles.scss";
import profile from "../../../assets/profile.png";
export const ProfilePlateComponent = () => {
  const { userDetail, userClass } = useSelector(
    (state: RootState) => state.profile
  );
  const dispatch = useDispatch();
  const userId = getUser();
  useEffect(() => {
    dispatch(getStudentUser(userId));
  }, []);
  console.log(userClass);
  return (
    <Box className="profilePlateContainer">
      <Box className="profilePlateHeader">
        <Typography variant="h4">Student Profile:</Typography>
      </Box>
      <Box className="profilePlateContent">
        <Box className="profileImageContainer">
          <img
            width="160px"
            src={userDetail?.img === "" ? profile : userDetail?.img}
          />
        </Box>
        {userId === "ROLE_STUDENT" && (
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
              <Typography>{userDetail?.gioiTinh ? "Nu" : "Nam"}</Typography>
              <Typography>{userDetail?.ngaySinh}</Typography>
              <Typography>{userDetail?.diaChi}</Typography>
              <Typography>{userClass?.tenLop}</Typography>
              <Typography>{userClass?.nienKhoa}</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
