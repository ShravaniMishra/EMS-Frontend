import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrevEmpData } from "../functions/utils";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { deleteEmploymentData } from "../Redux/appSlice";

const tableHeadStyles = {};
export const PrevEmpData = ({ emp_id }) => {
  const dispatch = useDispatch();
  const [prevEmp, setPrevEmp] = useState([]);
  const { token } = useSelector((state) => state);
  useEffect(() => {
    getPrevEmpData(emp_id, token, setPrevEmp);
  }, []);
  return (
    <Table>
      <TableHead>
        <TableRow
          sx={{
            padding: "0rem",
          }}
        >
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            Sr. No
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            Company Name
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            Designation
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            Role
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            From
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            To
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            Delete
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {prevEmp.length > 0 &&
          prevEmp.map((data, ind) => {
            const { _id, company_name, from, to, designation, role } = data;
            return (
              <TableRow key={_id}>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {ind + 1}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {company_name}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {designation}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {role}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {from}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {to}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() =>
                      dispatch(
                        deleteEmploymentData({
                          id: _id,
                          emp_id,
                          cb: setPrevEmp,
                        })
                      )
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};
