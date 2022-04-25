import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import "./App.css"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route exact path="/users/:id" element={<ProtectedRoute>
        <EmployeeDetails/>
        </ProtectedRoute>


      } />
         <Route exact path="/admin" element={<ProtectedRoute>
        <Admin/>
        </ProtectedRoute>


      } />
      

      <Route exact path="/" element={<Home />} />
     
      <Route exact path="/employees" element={<EmployeeList />} />
    
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
