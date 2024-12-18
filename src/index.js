import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import OurStores from "./pages/ourStores";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/stores" element={<OurStores />} />
    </Routes>
  </BrowserRouter>
);
