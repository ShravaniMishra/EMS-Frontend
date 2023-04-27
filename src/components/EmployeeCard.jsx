import { Box } from "@mui/material";
import React from "react";

const cardStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  backgroundColor: "var(--fourth-color)",
  color: "white",
  fontWeight: "bold",
  fontSize: "large",
  padding: "1rem",
};
export const EmployeeCard = ({ employee }) => {
  const { _id, emp_id, name, designation, date_of_joining } = employee;

  return (
    <Box
      sx={{
        border: "2px solid var(--fourth-color)",
        display: "grid",
        gridTemplateColumns: "repeat(1,1fr)",
        gap: "1rem",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <Box sx={cardStyles}>
        <p>Name :</p> <p>{name}</p>
      </Box>
      <Box sx={cardStyles}>
        <p>Employee Id :</p> <p>{emp_id}</p>
      </Box>
      <Box sx={cardStyles}>
        <p>Designation :</p> <p>{designation.toUpperCase()}</p>
      </Box>
      <Box sx={cardStyles}>
        <p>Date of Joining :</p> <p>{date_of_joining}</p>
      </Box>
    </Box>
  );
};
