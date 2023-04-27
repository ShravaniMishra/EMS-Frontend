import { useState } from "react";
import { DashboardHeader } from "../components/DashboardHeader";
import { EmployeesList } from "../components/EmployeesList";
import { RegisterEmployee } from "../components/RegisterEmployee";

export const comps = {
  register: "registerEmployee",
  employees: "employeeTable",
  desChart: "designationChart",
  totalEmp: "totalEmployees",
};

export const Dashboard = () => {
  const [show, setShow] = useState(comps.register);
  return (
    <div>
      <DashboardHeader setShow={setShow} show={show} />
      {show === comps.register && <RegisterEmployee />}
      {show === comps.employees && <EmployeesList />}
    </div>
  );
};
