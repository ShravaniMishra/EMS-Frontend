import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { registerSchema } from "../schemas";
import { EmployeePageHeader } from "../components/EmployeePageHeader";
import { useState } from "react";
import { updateEmployeeData } from "../Redux/appSlice";

export const EditEmployee = () => {
  const dispatch = useDispatch();
  const { emp_id } = useParams();
  const data = useLocation().state;
  const [initialValues, setInitialValues] = useState(data);

  const navigate = useNavigate();

  const { values, touched, errors, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: (values) => {
        dispatch(updateEmployeeData(values));
        resetForm();
        navigate("/dashboard");
      },
    });

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto" }}>
      <EmployeePageHeader emp_id={emp_id} employee={data} />
      <h1
        className="section_heading"
        style={{ margin: "1rem auto", textAlign: "center" }}
      >
        Edit Employee Details
      </h1>
      <AddEmpl>
        <form onSubmit={handleSubmit} className="form form-center">
          <TextField
            name="emp_id"
            type="text"
            // onChange={handleChange}
            value={values.emp_id}
            label="Employee ID"
            variant="outlined"
            error={touched.emp_id && errors.emp_id ? true : false}
            helperText={errors.emp_id}
            fullWidth
          />
          <TextField
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
            label="Employee Name"
            variant="outlined"
            error={touched.name && errors.name ? true : false}
            helperText={errors.name}
            fullWidth
          />
          <TextField
            name="date_of_joining"
            type="date"
            onChange={handleChange}
            value={values.date_of_joining}
            variant="outlined"
            error={
              touched.date_of_joining && errors.date_of_joining ? true : false
            }
            helperText={errors.date_of_joining}
            fullWidth
          />
          <Select
            name="designation"
            labelId="designation"
            value={values.designation}
            label="Designation"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="">Select Designation</MenuItem>
            <MenuItem value="accountant">Accountant</MenuItem>
            <MenuItem value="backend developer">Backend Developer</MenuItem>
            <MenuItem value="developer">Developer</MenuItem>
            <MenuItem value="frontend developer">Frontend Developer</MenuItem>
            <MenuItem value="graphic designer">Graphic Designer</MenuItem>
            <MenuItem value="hr">HR</MenuItem>
            <MenuItem value="manager">Manager</MenuItem>
            <MenuItem value="mean developer">MEAN Developer</MenuItem>
            <MenuItem value="mern developer">MERN Developer</MenuItem>
            <MenuItem value="team leader">Team Leader</MenuItem>
          </Select>
          <Button variant="outlined" type="submit">
            Update Employee
          </Button>
        </form>
      </AddEmpl>
    </Box>
  );
};
const AddEmpl = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    margin: auto;

    padding: 1rem;
  }
`;
