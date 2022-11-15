import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Navbar from "./components/Navbar";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/customers" element={<Customers/>}/>
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
