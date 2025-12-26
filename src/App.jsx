import { use, useContext, useEffect, useState } from 'react'
import './App.css'
import { Login } from './components/Auth/Login'
import { AdminDashboard } from './components/Dashboard/AdminDashboard'
import { EmployeDashboard } from './components/Dashboard/EmployeDashboard'
import { AuthContext } from './context/AuthContextProvider'
import { setLocalStorage } from './utilities/LocalStorage'

function App() {



  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);


 

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return;

    setUser(loggedInUser.role);

    if (loggedInUser.role === "employee") {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      const emp = employees.find(e => e.email === loggedInUser.email);
      setLoggedInUserData(emp);
    }
  }, []);





  const handleLogin = (email, password) => {

    // ADMIN LOGIN
    if (email === "admin@company.com" && password === "12345") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      return;
    }

    // EMPLOYEE LOGIN
    if (authData) {
      const employee = authData.employees.find(
        emp => emp.email === email && emp.password === password
      );

      if (employee) {
        setUser("employee");

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            email: employee.email
          })
        );

        setLoggedInUserData(employee);
        return;
      }
    }

    alert("Invalid credentials");
  };


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {
        user === "admin" ? <AdminDashboard changeUser={setUser} /> : user === "employee" ? <EmployeDashboard changeUser={setUser} data={loggedInUserData} /> : ""
      }

    </>
  )
}


export default App
