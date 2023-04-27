import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { EmployeeCard } from "../components/EmployeeCard";
import { PrevEmpData } from "../components/PrevEmpData";
import { EmployeePageHeader } from "../components/EmployeePageHeader";

export const EmployeePage = () => {
  const { emp_id } = useParams();
  const data = useLocation().state;
  // console.log(data, emp_id);
  return (
    <Employee>
      <EmployeePageHeader emp_id={emp_id} employee={data} />
      {data && (
        <Box>
          <EmployeeCard employee={data} />
          <PrevEmpData emp_id={emp_id} />
        </Box>
      )}
    </Employee>
  );
};
const Employee = styled.div`
  max-width: 1200px;
  margin: auto;
`;
