import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./authPages/loginPages/loginPages";
import RegisterPage from "./authPages/registerPages/registerPage";
import DashBoard from "./dashboard/dashboard";
import "./App.css";
import Notification from "./shared/component/notification";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/" element={<Navigate to="/dashBoard" replace />} />
        </Routes>
      </Router>

      <Notification />
    </>
  );
}

export default App;
