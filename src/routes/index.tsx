import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const RoutesApp: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/repositories/:repository/:repo" Component={Repository} />
      </Routes>
    </BrowserRouter>
  </>
);

export default RoutesApp;
