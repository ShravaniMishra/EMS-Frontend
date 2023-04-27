import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export const EmployeePageHeader = ({ emp_id, employee }) => {
  const navigate = useNavigate();
  // console.log(employee, "employee page header");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <Button
        startIcon={<ArrowBackIcon />}
        variant="contained"
        color="success"
        onClick={() => navigate(-1)}
      >
        RETURN BACK
      </Button>
      <Button
        variant="contained"
        color="success"
        startIcon={<EditIcon />}
        onClick={() => navigate(`/employee/addPrevEmp/${emp_id}`)}
      >
        Add Prev Employment
      </Button>
      <Button
        variant="contained"
        color="success"
        startIcon={<EditIcon />}
        onClick={() =>
          navigate(`/employee/edit/${emp_id}`, { state: employee })
        }
      >
        Edit Employee
      </Button>
     </Box>
  );
};
