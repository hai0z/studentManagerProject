import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import "./styles.scss";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

interface Iprops {
  error: boolean;
  page: string;
  onUpdateValue: (key: string, updateValue: string) => void;
  handleChangePage: (event: React.SyntheticEvent, newValue: string) => void;
  onSubmitStudent: () => Promise<void>;
  onSubmitTeacher: () => Promise<void>;
  onSubmitAdmin: () => Promise<void>;
}

export const SignInComponent = (props: Iprops) => {
  const {
    error,
    page,
    onUpdateValue,
    handleChangePage,
    onSubmitStudent,
    onSubmitTeacher,
    onSubmitAdmin,
  } = props;
  return (
    <Box className="BGcontainer">
      <Box className="signinContainer">
        <Box className="signinLeft">
          <Box>
            <Typography
              color="white"
              fontSize="48px"
              component="h1"
              sx={{ textShadow: "2px 2px 10px #6868ac", color: "grey" }}
            >
              Academy of Raya Lucaria
            </Typography>
            <Typography
              color="white"
              component="h6"
              fontSize="13px"
              sx={{ textShadow: "2px 2px 10px #6868ac", color: "grey" }}
            >
              "In this moment, I am euphoric. Not because of any phony demigod's
              blessing. But because, I am enlightened by my intelligence." -
              Tarnished
            </Typography>
          </Box>
        </Box>
        <Box className="signinRight">
          <Box className="signinRightContainer">
            <Box className="signinTittle">
              <Typography color="#6868ac" variant="h2" component="h2">
                Sign In
              </Typography>
            </Box>
            <TabContext value={page}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabList
                  onChange={handleChangePage}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "12%",
                    marginRight: "12%",
                  }}
                >
                  <Tab label="Student" value="1" />
                  <Tab label="Teacher" value="2" />
                  <Tab label="Administrator" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Box className="inputField">
                  <TextField
                    error={error}
                    label="ID Student"
                    onChange={(event) =>
                      onUpdateValue("maHs", event.target.value)
                    }
                    helperText={error ? "Incorrect ID." : ""}
                    fullWidth
                  />
                </Box>
                <Box className="inputField">
                  <TextField
                    error={error}
                    type="password"
                    label="Password"
                    onChange={(event) =>
                      onUpdateValue("password", event.target.value)
                    }
                    helperText={error ? "Incorrect password." : ""}
                    fullWidth
                  />
                </Box>
                <Button
                  sx={{
                    width: "90%",
                    color: "white",
                    background: "#6868ac",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  onClick={() => onSubmitStudent()}
                >
                  Submit
                </Button>
              </TabPanel>
              <TabPanel value="2">
                <Box className="inputField">
                  <TextField
                    error={error}
                    label="ID Teacher"
                    onChange={(event) =>
                      onUpdateValue("maGiaoVien", event.target.value)
                    }
                    helperText={error ? "Incorrect ID." : ""}
                    fullWidth
                  />
                </Box>
                <Box className="inputField">
                  <TextField
                    error={error}
                    type="password"
                    label="Password"
                    onChange={(event) =>
                      onUpdateValue("password", event.target.value)
                    }
                    helperText={error ? "Incorrect password." : ""}
                    fullWidth
                  />
                </Box>
                <Button
                  sx={{
                    width: "90%",
                    color: "white",
                    background: "#6868ac",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  onClick={() => onSubmitTeacher()}
                >
                  Submit
                </Button>
              </TabPanel>
              <TabPanel value="3">
                <Box className="inputField">
                  <TextField
                    error={error}
                    label="ID Admin"
                    onChange={(event) =>
                      onUpdateValue("username", event.target.value)
                    }
                    helperText={error ? "Incorrect ID." : ""}
                    fullWidth
                  />
                </Box>
                <Box className="inputField">
                  <TextField
                    error={error}
                    type="password"
                    label="Password"
                    onChange={(event) =>
                      onUpdateValue("password", event.target.value)
                    }
                    helperText={error ? "Incorrect password." : ""}
                    fullWidth
                  />
                </Box>
                <Button
                  sx={{
                    width: "90%",
                    color: "white",
                    background: "#6868ac",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  onClick={() => onSubmitAdmin()}
                >
                  Submit
                </Button>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
