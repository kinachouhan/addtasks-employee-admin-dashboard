import { use, useContext, useEffect, useState } from 'react'
import './App.css'
import { Login } from './components/Auth/Login'
import { AdminDashboard } from './components/Dashboard/AdminDashboard'
import { EmployeDashboard } from './components/Dashboard/EmployeDashboard'
import { AuthContext } from './context/AuthContextProvider'
import { setLocalStorage } from './utilities/LocalStorage'

function App() {

  useEffect(() => {
    setLocalStorage();
  }, []);


  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);


  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data || null);
    }
  }, [])


  const handleLogin = (email, password) => {
    
     if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } 
    else if (authData){
      const employee = authData.employees.find(emp => emp.email === email && emp.password === password);
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" , data: employee }) );
      } 
    }
    
    else {
      alert("Invalid credentials")
    }
  }

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
