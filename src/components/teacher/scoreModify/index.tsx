import React from "react";
import "./styles.scss";
import {
  Box,
  Button,
  Input,
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
import "./styles.scss";

type Iprops = {
  rows: {
    index: number;
    name: string;
    gioiTinh: string;
    ngaySinh: string;
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
  teacherClassList: {
    maLop: string;
    tenLop: string;
    tenMonHoc: string;
    maMonHoc: number;
    maHocKi: string;
  }[];
  currentSemester: string;
  currentSubject: string;
  currentClass: string;
  isEdit: boolean;
  onChangeClass: (event: SelectChangeEvent) => void;
  onChangeSemester: (event: SelectChangeEvent) => void;
  onChangeSubject: (event: SelectChangeEvent) => void;
  handleCancle: () => void;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ScoreModifyComponent = (props: Iprops) => {
  const {
    rows,
    onChangeSemester,
    onChangeSubject,
    onChangeClass,
    teacherClassList,
    currentSemester,
    currentSubject,
    currentClass,
    isEdit,
    handleCancle,
    setIsEdit,
  } = props;
  return (
    <Box>
      <Box>
        <Select
          defaultValue=""
          value={currentSemester}
          onChange={onChangeSemester}
        >
          {teacherClassList?.map((element, index) => (
            <MenuItem key={index} value={element.maHocKi}>
              {element.maHocKi}
            </MenuItem>
          ))}
        </Select>
        <Select defaultValue="" value={currentClass} onChange={onChangeClass}>
          {teacherClassList?.map((element, index) => (
            <MenuItem key={index} value={element.maLop}>
              {element.tenLop}
            </MenuItem>
          ))}
        </Select>
        <Select
          defaultValue=""
          value={currentSubject}
          onChange={onChangeSubject}
        >
          {teacherClassList?.map((element, index) => (
            <MenuItem key={index} value={element.maMonHoc}>
              {element.tenMonHoc}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box>
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
          onClick={() => setIsEdit(true)}
        >
          Edit
        </Button>
        {isEdit && (
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
            onClick={handleCancle}
          >
            Cancle
          </Button>
        )}
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
              ></TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  borderTop: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  borderTop: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                Gender
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  borderTop: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                Date of Birth
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
          {isEdit === false ? (
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.index}>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "10px",
                    }}
                    component="th"
                    align="center"
                    scope="row"
                  >
                    {row.index}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "100px",
                    }}
                    align="left"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "10px",
                    }}
                    align="center"
                  >
                    {row.gioiTinh}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    {row.ngaySinh}
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
          ) : (
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.index}>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "10px",
                    }}
                    component="th"
                    align="center"
                    scope="row"
                  >
                    {row.index}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "70px",
                    }}
                    align="left"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "10px",
                    }}
                    align="center"
                  >
                    {row.gioiTinh}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    {row.ngaySinh}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    <Input
                      id="diemHeSo1"
                      color="secondary"
                      value={row.diemHeSo1}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    <Input
                      id="diemHeSo1_2"
                      color="secondary"
                      value={row.diemHeSo1_2}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    <Input
                      id="diemHeSo1_3"
                      color="secondary"
                      value={row.diemHeSo1_3}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    <Input
                      id="diemHeSo1_4"
                      color="secondary"
                      value={row.diemHeSo1_4}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    <Input
                      id="diemHeSo2"
                      color="secondary"
                      value={row.diemHeSo2}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    <Input
                      id="diemHeSo2_2"
                      color="secondary"
                      value={row.diemHeSo2_2}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    <Input
                      id="diemHeSo2_3"
                      color="secondary"
                      value={row.diemHeSo2_3}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    <Input
                      id="diemHeSo3"
                      color="secondary"
                      value={row.diemHeSo3}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      width: "50px",
                    }}
                    align="center"
                  >
                    0
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
};
