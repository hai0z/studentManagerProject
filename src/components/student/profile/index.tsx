import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../../../assets/profile.png";
import "./styles.scss";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

type Iprops = {
  userDetail: any;
  userClass: any;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnSubmit: () => void;
  onUpdateValue: (key: string, updateValue: string | Date | null) => void;
  value: any;
  valueClass: any;
  onUpdateValueClass: (key: string, updateValue: string) => void;
  handleOnCancle: () => void;
  isEditPassword: boolean;
  setIsEditPassword: React.Dispatch<React.SetStateAction<boolean>>;
  password: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  onUpdatePassword: (key: string, updateValue: string) => void;
  isError: boolean;
  handleOnSubmitPasswordChange: () => void;
};

export const ProfileStudentComponent = (props: Iprops) => {
  const {
    userDetail,
    userClass,
    isEdit,
    setIsEdit,
    handleOnSubmit,
    onUpdateValue,
    value,
    valueClass,
    onUpdateValueClass,
    handleOnCancle,
    isEditPassword,
    setIsEditPassword,
    password,
    onUpdatePassword,
    isError,
    handleOnSubmitPasswordChange,
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box className="profileContainer">
        <Box>
          <img
            width={300}
            src={userDetail?.img === "" ? profile : userDetail?.img}
          />
        </Box>
        {isEditPassword === false ? (
          <>
            {isEdit === false ? (
              <Box className="profileBox">
                <Box className="profileDetailContainer">
                  <Box className="profileDetailTittle">
                    <Typography>ID:</Typography>
                    <Typography>Name:</Typography>
                    <Typography>Gender:</Typography>
                    <Typography>Date of Birth:</Typography>
                    <Typography>Address:</Typography>
                    <Typography>Home town:</Typography>
                    <Typography>Class:</Typography>
                    <Typography>Year:</Typography>
                  </Box>
                  <Box className="profileDetail">
                    <Typography>{userDetail?.maHs}</Typography>
                    <Typography>{userDetail?.hoTen}</Typography>
                    <Typography>
                      {userDetail?.gioiTinh ? "Nu" : "Nam"}
                    </Typography>
                    <Typography>{userDetail?.ngaySinh}</Typography>
                    <Typography>{userDetail?.diaChi}</Typography>
                    <Typography>{userDetail?.queQuan}</Typography>
                    <Typography>{userClass?.tenLop}</Typography>
                    <Typography>{userClass?.nienKhoa}</Typography>
                  </Box>
                </Box>
                <Button
                  sx={{
                    margin: "5px",
                    width: "40%",
                    color: "white",
                    background: "#6868ac",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  onClick={() => setIsEdit(true)}
                >
                  Edit Profile
                </Button>
                <Button
                  sx={{
                    margin: "5px",
                    width: "40%",
                    color: "white",
                    background: "#6868ac",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  color="info"
                  onClick={() => setIsEditPassword(true)}
                >
                  Change Password
                </Button>
              </Box>
            ) : (
              <Box className="profileEditBox">
                <Box className="profileDetailContainer">
                  <Box sx={{ marginRight: 10 }}>
                    <FormControl fullWidth disabled variant="standard">
                      <InputLabel color="secondary" htmlFor="maHs">
                        ID
                      </InputLabel>
                      <Input
                        id="maHs"
                        color="secondary"
                        value={value?.maHs}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth disabled variant="standard">
                      <InputLabel color="secondary" htmlFor="hoTen">
                        Name
                      </InputLabel>
                      <Input
                        id="hoTen"
                        color="secondary"
                        value={value?.hoTen}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth disabled variant="standard">
                      <InputLabel color="secondary" htmlFor="gioiTinh">
                        Gender
                      </InputLabel>
                      <Input
                        id="gioiTinh"
                        color="secondary"
                        value={value?.gioiTinh ? "Nu" : "Nam"}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <DesktopDatePicker
                      label="Date of birth"
                      inputFormat="DD/MM/YYYY"
                      value={value?.ngaySinh}
                      onChange={(newValue: Date | null) => {
                        onUpdateValue("ngaySinh", newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          variant="standard"
                          color="secondary"
                          sx={{ marginBottom: "20px" }}
                          {...params}
                        />
                      )}
                    />
                  </Box>
                  <Box>
                    <FormControl fullWidth variant="standard">
                      <InputLabel color="secondary" htmlFor="diaChi">
                        Address
                      </InputLabel>
                      <Input
                        color="secondary"
                        id="diaChi"
                        value={value?.diaChi}
                        sx={{ marginBottom: "20px" }}
                        onChange={(
                          newValue: React.ChangeEvent<
                            HTMLTextAreaElement | HTMLInputElement
                          >
                        ) => onUpdateValue("diaChi", newValue.target.value)}
                      />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                      <InputLabel color="secondary" htmlFor="queQuan">
                        Home town
                      </InputLabel>
                      <Input
                        color="secondary"
                        id="queQuan"
                        value={value?.queQuan}
                        onChange={(
                          newValue: React.ChangeEvent<
                            HTMLTextAreaElement | HTMLInputElement
                          >
                        ) => onUpdateValue("queQuan", newValue.target.value)}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth disabled variant="standard">
                      <InputLabel color="secondary" htmlFor="tenLop">
                        Class
                      </InputLabel>
                      <Input
                        id="tenLop"
                        color="secondary"
                        value={valueClass?.tenLop}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth disabled variant="standard">
                      <InputLabel color="secondary" htmlFor="nienKhoa">
                        Year
                      </InputLabel>
                      <Input
                        id="nienKhoa"
                        color="secondary"
                        value={valueClass?.nienKhoa}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                  </Box>
                </Box>
                <Button
                  sx={{
                    margin: "5px",
                    width: "20%",
                    color: "white",
                    background: "#6868ac",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  onClick={() => handleOnSubmit()}
                >
                  Submit
                </Button>
                <Button
                  sx={{
                    margin: "5px",
                    width: "20%",
                    color: "white",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  color="warning"
                  onClick={() => handleOnCancle()}
                >
                  Cancle
                </Button>
              </Box>
            )}
          </>
        ) : (
          <>
            <Box className="profileEditBox">
              <FormControl fullWidth variant="standard">
                <InputLabel color="secondary" htmlFor="maHs">
                  Current password
                </InputLabel>
                <Input
                  id="currentPassword"
                  color="secondary"
                  value={password.currentPassword}
                  error={isError}
                  type="password"
                  onChange={(e) =>
                    onUpdatePassword("currentPassword", e.target.value)
                  }
                  sx={{ marginBottom: "20px" }}
                />
              </FormControl>
              <FormControl fullWidth variant="standard">
                <InputLabel color="secondary" htmlFor="hoTen">
                  New password
                </InputLabel>
                <Input
                  id="newPassword"
                  color="secondary"
                  value={password.newPassword}
                  error={isError}
                  type="password"
                  onChange={(e) =>
                    onUpdatePassword("newPassword", e.target.value)
                  }
                  sx={{ marginBottom: "20px" }}
                />
              </FormControl>
              <FormControl fullWidth variant="standard">
                <InputLabel color="secondary" htmlFor="gioiTinh">
                  Confirm password
                </InputLabel>
                <Input
                  id="confirmPassword"
                  color="secondary"
                  value={password.confirmPassword}
                  type="password"
                  error={isError}
                  onChange={(e) =>
                    onUpdatePassword("confirmPassword", e.target.value)
                  }
                  sx={{ marginBottom: "20px" }}
                />
              </FormControl>
              {isError && <Typography color="error">INPUT ERROR</Typography>}
              <Button
                sx={{
                  margin: "5px",
                  width: "20%",
                  color: "white",
                  background: "#6868ac",
                  borderRadius: "40px",
                  fontSize: "18px",
                  padding: "10px",
                }}
                variant="contained"
                onClick={() => handleOnSubmitPasswordChange()}
              >
                Submit
              </Button>
              <Button
                sx={{
                  margin: "5px",
                  width: "20%",
                  color: "white",
                  borderRadius: "40px",
                  fontSize: "18px",
                  padding: "10px",
                }}
                variant="contained"
                color="warning"
                onClick={() => setIsEditPassword(false)}
              >
                Cancle
              </Button>
            </Box>
          </>
        )}
      </Box>
    </LocalizationProvider>
  );
};
