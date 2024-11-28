import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import UserTable from "./UserTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserTable" element={<UserTable />} />
      </Routes>
    </Router>
  );
}

export default App;
