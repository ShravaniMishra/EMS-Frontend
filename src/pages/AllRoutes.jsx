import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { RegisterEmployee } from "../components/RegisterEmployee";
import { UserLogin } from "./UserLogin";
import { useSelector } from "react-redux";
import { EmployeePage } from "./EmployeePage";
import { AddPrevEmplForm } from "../components/AddPrevEmplForm";
import { EditEmployee } from "./EditEmployee";

export const AllRoutes = () => {
  const { token, user } = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route
          path="/dashboard"
          element={token && user ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/employee/:emp_id"
          element={
            token && user ? <EmployeePage /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/employee/addPrevEmp/:emp_id"
          element={
            token && user ? <AddPrevEmplForm /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/employee/edit/:emp_id"
          element={
            token && user ? <EditEmployee /> : <Navigate to="/dashboard" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
