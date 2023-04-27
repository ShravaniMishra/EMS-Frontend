import { useParams } from "react-router-dom";
import { EmployeePageHeader } from "./EmployeePageHeader";
import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import styled from "styled-components";
import { addPrevEmplSchema } from "../schemas";
import { useDispatch } from "react-redux";
import { addEmploymentData } from "../Redux/appSlice";

const initialValues = {
  company_name: "",
  designation: "",
  from: "",
  to: "",
  role: "",
};

export const AddPrevEmplForm = () => {
  const { emp_id } = useParams();
  const dispatch = useDispatch();

  const { values, errors, touched, handleSubmit, handleChange, resetForm } =
    useFormik({
      initialValues,
      validationSchema: addPrevEmplSchema,
      onSubmit: (values) => {
        let data = { ...values, emp_id };
        dispatch(addEmploymentData(data));
        resetForm();
      },
    });

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto" }}>
      <EmployeePageHeader emp_id={emp_id} />
      <h1
        className="section_heading"
        style={{ margin: "1rem auto", textAlign: "center" }}
      >
        Add Previous Employment
      </h1>
      <AddEmpl>
        <form onSubmit={handleSubmit} className="form">
          <TextField
            name="company_name"
            type="text"
            onChange={handleChange}
            value={values.company_name}
            label="Company Name"
            variant="outlined"
            error={touched.company_name && errors.company_name ? true : false}
            helperText={errors.company_name}
            fullWidth
          />
          <TextField
            name="designation"
            type="text"
            onChange={handleChange}
            value={values.designation}
            label="Designation"
            variant="outlined"
            error={touched.designation && errors.designation ? true : false}
            helperText={errors.designation}
            fullWidth
          />
          <TextField
            name="from"
            type="date"
            onChange={handleChange}
            value={values.from}
            variant="outlined"
            error={touched.from && errors.from ? true : false}
            helperText={errors.from}
            fullWidth
          />
          <TextField
            name="to"
            type="date"
            onChange={handleChange}
            value={values.to}
            variant="outlined"
            error={touched.to && errors.to ? true : false}
            helperText={errors.to}
            fullWidth
          />
          <TextField
            name="role"
            type="text"
            onChange={handleChange}
            value={values.role}
            label="Role"
            variant="outlined"
            error={touched.role && errors.role ? true : false}
            helperText={errors.role}
            fullWidth
          />
          <Button
            sx={{ margin: "auto", textAlign: "center" }}
            variant="contained"
            type="submit"
          >
            Add Employment Data
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
