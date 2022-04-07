import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import { setPath } from "../../../utils/localStorage";
import "./styles.scss";

export const DashBoardComponent = () => {
  const history = useHistory();
  const handleOnClick = () => {
    setPath("/home");
    history.push("/home");
  };
  return (
    <Box className="containerDashboard">
      <Box>
        <Typography color="white" fontSize="48px" component="h1">
          WELCOME TO
        </Typography>
        <Typography color="white" fontSize="48px" component="h1">
          ACADEMY OF RAYA LUCARIA
        </Typography>
        <Button
          sx={{
            width: "60%",
            color: "white",
            background: "#6868ac",
            borderRadius: "40px",
            fontSize: "18px",
            padding: "10px",
          }}
          variant="contained"
          onClick={() => handleOnClick()}
        >
          Let's Begin
        </Button>
      </Box>
    </Box>
  );
};
