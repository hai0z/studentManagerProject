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
  onChange: (event: SelectChangeEvent) => void;
};

export const HomeStudentComponent = (props: Iprops) => {
  const { rows, currentSemester, studentSemester, onChange } = props;

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
            maxHeight: 440,
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: 5,
            },
          }}
        >
          <Table stickyHeader sx={{ minWidth: 500 }} aria-label="simple table">
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
  );
};
