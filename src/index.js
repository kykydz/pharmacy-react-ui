import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AddDrug from "./Page/AddDrug/add-drug";
import EditStock from './Page/EditStock/edit-stock';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/drug-stock/:id" element={<EditStock />} />
      <Route path="/add-employee" element={<AddDrug />} />
    </Routes>
  </Router>
);