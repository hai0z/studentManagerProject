import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

type Iprops = {
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
};

export const ScheduleStudentComponent = (props: Iprops) => {
  const { rowsSchedule } = props;
  return (
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
                component="th"
                scope="row"
                align="center"
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
  );
};
