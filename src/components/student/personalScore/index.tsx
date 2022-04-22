import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";

type Iprops = {
  rows: {
    name: string;
    diemHeSo1: number;
    diemHeSo1_2: number;
    diemHeSo1_3: number;
    diemHeSo1_4: number;
    diemHeSo2: number;
    diemHeSo2_2: number;
    diemHeSo2_3: number;
    diemHeSo3: number;
    trungBinhMon: number;
  }[];
  currentSemester: string;
  semester: {
    maHocKi: string;
    hocKi: number;
    namHoc: string;
  }[];
  onChange: (event: SelectChangeEvent) => void;
};

export const PersonalScoreComponent = (props: Iprops) => {
  const { rows, currentSemester, semester, onChange } = props;
  return (
    <Box>
      <Box sx={{ textAlign: "start", marginBottom: "10px" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentSemester}
          label="Age"
          onChange={onChange}
        >
          {semester.map((element, index) => (
            <MenuItem key={index} value={element.maHocKi}>
              {element.maHocKi}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <TableContainer
        sx={{
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: 5,
          },
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  borderTop: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                Subject
              </TableCell>
              <TableCell
                align="center"
                colSpan={4}
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  borderTop: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                Coefficient score 1
              </TableCell>
              <TableCell
                align="center"
                colSpan={3}
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  borderTop: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                Coefficient score 2
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  borderTop: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                Final exam
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  borderTop: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                Total
              </TableCell>
            </TableRow>
            <TableRow></TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  sx={{
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    width: "50px",
                  }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    width: "50px",
                  }}
                  align="center"
                >
                  {row.diemHeSo1}
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    width: "50px",
                  }}
                  align="center"
                >
                  {row.diemHeSo1_2}
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    width: "50px",
                  }}
                  align="center"
                >
                  {row.diemHeSo1_3}
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    width: "50px",
                  }}
                  align="center"
                >
                  {row.diemHeSo1_4}
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    width: "50px",
                  }}
                  align="center"
                >
                  {row.diemHeSo2}
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    width: "50px",
                  }}
                  align="center"
                >
                  {row.diemHeSo2_2}
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    width: "50px",
                  }}
                  align="center"
                >
                  {row.diemHeSo2_3}
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    width: "50px",
                  }}
                  align="center"
                >
                  {row.diemHeSo3}
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    width: "50px",
                  }}
                  align="center"
                >
                  {row.trungBinhMon}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
