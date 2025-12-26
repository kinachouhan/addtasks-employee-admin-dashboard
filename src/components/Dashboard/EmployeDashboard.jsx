import { useState, useEffect } from "react";
import { Header } from "../Other/Header";
import { TaskListNumbers } from "../Other/TaskListNumbers";
import { TaskList } from "../TaskList/TaskList";

export const EmployeDashboard = ({ changeUser }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const loadEmployee = () => {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

      // 🚨 No logged-in user → go to login
      if (!loggedInUser || !loggedInUser.email) {
        changeUser(null);
        return;
      }

      const currentEmp = employees.find(
        emp => emp.email === loggedInUser.email
      );

      // 🚨 Employee not found → logout
      if (!currentEmp) {
        changeUser(null);
        return;
      }

      setEmployee(currentEmp);
    };

    loadEmployee();

    window.addEventListener("taskUpdated", loadEmployee);

    return () => {
      window.removeEventListener("taskUpdated", loadEmployee);
    };
  }, [changeUser]);

  // ⏳ Loading state (prevents blank screen)
  if (!employee) {
    return (
      <div className="bg-[#1C1C1C] h-screen flex items-center justify-center text-white">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="bg-[#1C1C1C] p-10 h-screen text-white">
      <Header changeUser={changeUser} data={employee} />
      <TaskListNumbers data={employee} />
      <TaskList data={employee} />
    </div>
  );
};
