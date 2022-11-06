import React from "react";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/hngi9" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
