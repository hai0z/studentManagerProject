import React, { useState } from "react";
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
        maDiem: number;
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
    value: any;
    onChangeClass: (event: SelectChangeEvent) => void;
    onChangeSemester: (event: SelectChangeEvent) => void;
    onChangeSubject: (event: SelectChangeEvent) => void;
    handleCancle: () => void;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    handleChangeValue: (
        markId: number,
        key: string,
        updateValue: number
    ) => void;
    handleOnSubmit: () => void;
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
        handleChangeValue,
        handleOnSubmit,
        value,
    } = props;
    const semester = teacherClassList
        .map((element) => element.maHocKi)
        .filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
    const classList = teacherClassList
        .map((element) => ({
            maLop: element.maLop,
            tenLop: element.tenLop,
            maHocKi: element.maHocKi,
        }))
        .filter(
            (value, index, self) =>
                index ===
                self.findIndex(
                    (t) =>
                        t.maLop === value.maLop &&
                        t.tenLop === value.tenLop &&
                        t.maHocKi === value.maHocKi
                )
        );
    console.log(classList);
    return (
        <Box>
            <Box
                sx={{
                    maxWidth: "500px",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    display: "flex",
                    margin: "auto",
                }}
            >
                <Box>
                    <Select
                        sx={{ width: "150px" }}
                        defaultValue=""
                        value={currentSemester}
                        onChange={onChangeSemester}
                    >
                        {semester.map((element, index) => (
                            <MenuItem key={index} value={element}>
                                {element}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
                <Box>
                    <Select
                        sx={{ width: "150px" }}
                        defaultValue=""
                        value={currentClass}
                        onChange={onChangeClass}
                    >
                        {classList?.map(
                            (element, index) =>
                                element.maHocKi === currentSemester && (
                                    <MenuItem key={index} value={element.maLop}>
                                        {element.tenLop}
                                    </MenuItem>
                                )
                        )}
                    </Select>
                </Box>
                <Box>
                    <Select
                        sx={{ width: "150px" }}
                        defaultValue=""
                        value={currentSubject}
                        onChange={onChangeSubject}
                    >
                        {teacherClassList?.map(
                            (element, index) =>
                                element.maLop == currentClass &&
                                element.maHocKi == currentSemester && (
                                    <MenuItem
                                        key={index}
                                        value={element.maMonHoc}
                                    >
                                        {element.tenMonHoc}
                                    </MenuItem>
                                )
                        )}
                    </Select>
                </Box>
            </Box>
            <Box>
                {isEdit == false && (
                    <Button
                        sx={{
                            margin: "5px",
                            width: "10%",
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
                )}
                {isEdit && (
                    <Button
                        sx={{
                            margin: "5px",
                            width: "10%",
                            color: "white",
                            background: "#6868ac",
                            borderRadius: "40px",
                            fontSize: "18px",
                            padding: "10px",
                        }}
                        variant="contained"
                        onClick={handleOnSubmit}
                    >
                        Submit
                    </Button>
                )}
                {isEdit && (
                    <Button
                        sx={{
                            margin: "5px",
                            width: "10%",
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
                                    borderLeft:
                                        "1px solid rgba(224, 224, 224, 1)",
                                    borderTop:
                                        "1px solid rgba(224, 224, 224, 1)",
                                }}
                            ></TableCell>
                            <TableCell
                                align="center"
                                colSpan={1}
                                sx={{
                                    borderLeft:
                                        "1px solid rgba(224, 224, 224, 1)",
                                    borderTop:
                                        "1px solid rgba(224, 224, 224, 1)",
                                }}
                            >
                                Name
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={1}
                                sx={{
                                    borderLeft:
                                        "1px solid rgba(224, 224, 224, 1)",
                                    borderTop:
                                        "1px solid rgba(224, 224, 224, 1)",
                                }}
                            >
                                Gender
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={1}
                                sx={{
                                    borderLeft:
                                        "1px solid rgba(224, 224, 224, 1)",
                                    borderTop:
                                        "1px solid rgba(224, 224, 224, 1)",
                                }}
                            >
                                Date of Birth
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={4}
                                sx={{
                                    borderLeft:
                                        "1px solid rgba(224, 224, 224, 1)",
                                    borderTop:
                                        "1px solid rgba(224, 224, 224, 1)",
                                }}
                            >
                                Coefficient score 1
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={3}
                                sx={{
                                    borderLeft:
                                        "1px solid rgba(224, 224, 224, 1)",
                                    borderTop:
                                        "1px solid rgba(224, 224, 224, 1)",
                                }}
                            >
                                Coefficient score 2
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={1}
                                sx={{
                                    borderLeft:
                                        "1px solid rgba(224, 224, 224, 1)",
                                    borderTop:
                                        "1px solid rgba(224, 224, 224, 1)",
                                }}
                            >
                                Final exam
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={1}
                                sx={{
                                    borderLeft:
                                        "1px solid rgba(224, 224, 224, 1)",
                                    borderTop:
                                        "1px solid rgba(224, 224, 224, 1)",
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
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
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
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "100px",
                                        }}
                                        align="left"
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "10px",
                                        }}
                                        align="center"
                                    >
                                        {row.gioiTinh}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {row.ngaySinh}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {row.diemHeSo1}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {row.diemHeSo1_2}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {row.diemHeSo1_3}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {row.diemHeSo1_4}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {row.diemHeSo2}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {row.diemHeSo2_2}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {row.diemHeSo2_3}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {row.diemHeSo3}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
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
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
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
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "70px",
                                        }}
                                        align="left"
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "10px",
                                        }}
                                        align="center"
                                    >
                                        {row.gioiTinh}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {row.ngaySinh}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        <Input
                                            id="diemHeSo1"
                                            color="secondary"
                                            placeholder={
                                                row.diemHeSo1
                                                    ? row.diemHeSo1.toString()
                                                    : ""
                                            }
                                            type="number"
                                            onChange={(e) =>
                                                handleChangeValue(
                                                    row.maDiem,
                                                    "diemHeSo1",
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        <Input
                                            id="diemHeSo1_2"
                                            color="secondary"
                                            placeholder={
                                                row.diemHeSo1_2
                                                    ? row.diemHeSo1_2.toString()
                                                    : ""
                                            }
                                            type="number"
                                            onChange={(e) =>
                                                handleChangeValue(
                                                    row.maDiem,
                                                    "diemHeSo1_2",
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        <Input
                                            id="diemHeSo1_3"
                                            color="secondary"
                                            placeholder={
                                                row.diemHeSo1_3
                                                    ? row.diemHeSo1_3.toString()
                                                    : ""
                                            }
                                            type="number"
                                            onChange={(e) =>
                                                handleChangeValue(
                                                    row.maDiem,
                                                    "diemHeSo1_3",
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        <Input
                                            id="diemHeSo1_4"
                                            color="secondary"
                                            placeholder={
                                                row.diemHeSo1_4
                                                    ? row.diemHeSo1_4.toString()
                                                    : ""
                                            }
                                            type="number"
                                            onChange={(e) =>
                                                handleChangeValue(
                                                    row.maDiem,
                                                    "diemHeSo1_4",
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        <Input
                                            id="diemHeSo2"
                                            color="secondary"
                                            placeholder={
                                                row.diemHeSo2
                                                    ? row.diemHeSo2.toString()
                                                    : ""
                                            }
                                            type="number"
                                            onChange={(e) =>
                                                handleChangeValue(
                                                    row.maDiem,
                                                    "diemHeSo2",
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        <Input
                                            id="diemHeSo2_2"
                                            color="secondary"
                                            placeholder={
                                                row.diemHeSo2_2
                                                    ? row.diemHeSo2_2.toString()
                                                    : ""
                                            }
                                            type="number"
                                            onChange={(e) =>
                                                handleChangeValue(
                                                    row.maDiem,
                                                    "diemHeSo2_2",
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        <Input
                                            id="diemHeSo2_3"
                                            color="secondary"
                                            placeholder={
                                                row.diemHeSo2_3
                                                    ? row.diemHeSo2_3.toString()
                                                    : ""
                                            }
                                            type="number"
                                            onChange={(e) =>
                                                handleChangeValue(
                                                    row.maDiem,
                                                    "diemHeSo2_3",
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        <Input
                                            id="diemHeSo3"
                                            color="secondary"
                                            placeholder={
                                                row.diemHeSo3
                                                    ? row.diemHeSo3.toString()
                                                    : ""
                                            }
                                            type="number"
                                            onChange={(e) =>
                                                handleChangeValue(
                                                    row.maDiem,
                                                    "diemHeSo3",
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderLeft:
                                                "1px solid rgba(224, 224, 224, 1)",
                                            width: "50px",
                                        }}
                                        align="center"
                                    >
                                        {value.map((element: any) => {
                                            if (element.maDiem === row.maDiem) {
                                                let count = 0;
                                                if (
                                                    element.diemHeSo1 !== null
                                                ) {
                                                    count = count + 1;
                                                }
                                                if (
                                                    element.diemHeSo1_2 !== null
                                                ) {
                                                    count = count + 1;
                                                }
                                                if (
                                                    element.diemHeSo1_3 !== null
                                                ) {
                                                    count = count + 1;
                                                }
                                                if (
                                                    element.diemHeSo1_4 !== null
                                                ) {
                                                    count = count + 1;
                                                }
                                                if (
                                                    element.diemHeSo2 !== null
                                                ) {
                                                    count = count + 2;
                                                }
                                                if (
                                                    element.diemHeSo2_2 !== null
                                                ) {
                                                    count = count + 2;
                                                }
                                                if (
                                                    element.diemHeSo2_3 !== null
                                                ) {
                                                    count = count + 2;
                                                }
                                                if (
                                                    element.diemHeSo3 !== null
                                                ) {
                                                    count = count + 3;
                                                }
                                                let total =
                                                    (element.diemHeSo1 +
                                                        element.diemHeSo1_2 +
                                                        element.diemHeSo1_3 +
                                                        element.diemHeSo1_4 +
                                                        element.diemHeSo2 * 2 +
                                                        element.diemHeSo2_2 *
                                                            2 +
                                                        element.diemHeSo2_3 *
                                                            2 +
                                                        element.diemHeSo3 * 3) /
                                                    count;
                                                return total.toFixed(1);
                                            }
                                        })}
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
