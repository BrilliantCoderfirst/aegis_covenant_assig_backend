import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Passenger from "./pages/Passenger";
import Admin from "./pages/Admin";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname == "/" ? (
        <Login />
      ) : location.pathname == "/signup" ? (
        <SignUp />
      ) : (
        ""
      )}

      <Routes>
        <Route path="/passenger" element={<Passenger />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
