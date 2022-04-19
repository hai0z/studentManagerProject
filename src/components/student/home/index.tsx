import {
  Box,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ProfilePlateComponent } from "../../all/profilePlate";
import "./styles.scss";

type Iprops = {
  rows: {
    name: string;
    avgScore: number;
  }[];
  currentSemester: string;
  studentSemester: {
    maHocKi: string;
    hocKi: number;
    namHoc: string;
  }[];
  rowsSchedule: {
    peroid: string;
    mon: string;
    tues: string;
    wed: string;
    thurs: string;
    fri: string;
    sat: string;
    sun: string;
  }[];
  onChange: (event: SelectChangeEvent) => void;
};

export const HomeStudentComponent = (props: Iprops) => {
  const { rows, currentSemester, studentSemester, onChange, rowsSchedule } =
    props;

  return (
    <Box className="homeContainer">
      <Box className="homeLeftContainer">
        <Box className="homeLeftTopContainer">
          <ProfilePlateComponent />
        </Box>
        <Box className="homeLeftBottomContainer">
          <Box className="homeLeftBottomTable">
            <Box>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentSemester}
                label="Age"
                onChange={onChange}
              >
                {studentSemester.map((element, index) => (
                  <MenuItem key={index} value={element.maHocKi}>
                    {element.maHocKi}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <TableContainer
              component={Paper}
              sx={{
                maxHeight: 440,
                overflowX: "hidden",
                "&::-webkit-scrollbar": {
                  width: 5,
                },
              }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 500 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Subject</TableCell>
                    <TableCell align="right">Average score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.avgScore}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
      <Box className="homeRightContainer">
        <TableContainer
          component={Paper}
          sx={{
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: 5,
            },
          }}
        >
          <Table stickyHeader sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
                    color: "white",
                    backgroundColor: "#6868ac",
                  }}
                  align="center"
                >
                  Peroid
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
                    color: "white",
                    backgroundColor: "#6868ac",
                  }}
                  align="center"
                >
                  Mon
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
                    color: "white",
                    backgroundColor: "#6868ac",
                  }}
                  align="center"
                >
                  Tues
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
                    color: "white",
                    backgroundColor: "#6868ac",
                  }}
                  align="center"
                >
                  Wed
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
                    color: "white",
                    backgroundColor: "#6868ac",
                  }}
                  align="center"
                >
                  Thurs
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
                    color: "white",
                    backgroundColor: "#6868ac",
                  }}
                  align="center"
                >
                  Fri
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
                    color: "white",
                    backgroundColor: "#6868ac",
                  }}
                  align="center"
                >
                  Sat
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
                    color: "white",
                    backgroundColor: "#6868ac",
                  }}
                  align="center"
                >
                  Sun
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsSchedule.map((row) => (
                <TableRow
                  key={row.peroid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      borderRight: "1px solid rgba(99, 99, 99, 0.1)",
                      height: "71px",
                      width: "120px",
                    }}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {row.peroid}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor:
                        row.mon === "" ? "rgba(99, 99, 99, 0.1)" : "",
                      borderRight: "1px solid rgba(99, 99, 99, 0.1)",
                      height: "71px",
                      width: "120px",
                    }}
                    align="center"
                  >
                    {row.mon}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor:
                        row.tues === "" ? "rgba(99, 99, 99, 0.1)" : "",
                      borderRight: "1px solid rgba(99, 99, 99, 0.1)",
                      height: "71px",
                      width: "120px",
                    }}
                    align="center"
                  >
                    {row.tues}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor:
                        row.wed === "" ? "rgba(99, 99, 99, 0.1)" : "",
                      borderRight: "1px solid rgba(99, 99, 99, 0.1)",
                      height: "71px",
                      width: "120px",
                    }}
                    align="center"
                  >
                    {row.wed}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor:
                        row.thurs === "" ? "rgba(99, 99, 99, 0.1)" : "",
                      borderRight: "1px solid rgba(99, 99, 99, 0.1)",
                      height: "71px",
                      width: "120px",
                    }}
                    align="center"
                  >
                    {row.thurs}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor:
                        row.fri === "" ? "rgba(99, 99, 99, 0.1)" : "",
                      borderRight: "1px solid rgba(99, 99, 99, 0.1)",
                      height: "71px",
                      width: "120px",
                    }}
                    align="center"
                  >
                    {row.fri}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor:
                        row.sat === "" ? "rgba(99, 99, 99, 0.1)" : "",
                      borderRight: "1px solid rgba(99, 99, 99, 0.1)",
                      height: "71px",
                      width: "120px",
                    }}
                    align="center"
                  >
                    {row.sat}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor:
                        row.sun === "" ? "rgba(99, 99, 99, 0.1)" : "",
                      borderRight: "1px solid rgba(99, 99, 99, 0.1)",
                      height: "71px",
                      width: "120px",
                    }}
                    align="center"
                  >
                    {row.sun}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
