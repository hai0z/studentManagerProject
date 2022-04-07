import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import "./styles.scss";

interface Iprops {
  error: boolean;
  onUpdateValue: (key: string, updateValue: string) => void;
  onSubmit: () => void;
}

export const SignInComponent = (props: Iprops) => {
  const { error, onUpdateValue, onSubmit } = props;
  return (
    <Box className="BGcontainer">
      <Box className="signinContainer">
        <Box className="signinLeft">
          <Box>
            <Typography color="white" fontSize="48px" component="h1">
              Academy of Raya Lucaria
            </Typography>
            <Typography color="white" component="h6" fontSize="13px">
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
            <Box className="inputField">
              <TextField
                error={error}
                label="Email"
                type="email"
                onChange={(event) =>
                  onUpdateValue("emailAddress", event.target.value)
                }
                helperText={error ? "Incorrect email." : ""}
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
              onClick={() => onSubmit()}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
