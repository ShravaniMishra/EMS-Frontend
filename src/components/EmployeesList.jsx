import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getEmployees } from "../Redux/appSlice";
import { EmployeeRow } from "./EmployeeRow";
import { EmployeeTable } from "./EmployeeTable";

export const EmployeesList = () => {
  const dispatch = useDispatch();

  const { employees, isLoading, isError } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <EmployeeList>
      <h1 className="section_heading">All Employees Details</h1>
      <br />
      <EmployeeTable employees={employees} />
    </EmployeeList>
  );
};

const EmployeeList = styled.div`
h1{
  color: maroon;
}
h1:hover{
  color:goldenrod
}
  .section_heading {
    margin: auto;
    text-align: center;
  }
  .section_employees {
    max-width: 1200px;
    padding: 1rem 1rem;
    margin: auto;
  }

  .employees_table {
    width: 100%;
    margin: auto;
    padding: 1rem 1rem;

    border: 1px solid #000;
    border-collapse: collapse;
  }

  .employees_table th {
    text-transform: uppercase;
    padding: 10px;
  }

  .employees_table td {
    border: 1px solid #000;
    width: 10%;
    text-align: center;
  }
  .show_btn {
    background-color: var(--first-color);
  }
  .edit_btn {
    background: var(--second-color);
  }

  .delete_btn {
    background: red;
  }

  .btn {
    text-transform: uppercase;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.8;
  }

  .table_body tr td {
    /* background: var(--fourth-color); */
    padding: 1rem;
    margin: 1rem;
    color: var(--second-color);
    font-weight: bolder;
  }
`;
