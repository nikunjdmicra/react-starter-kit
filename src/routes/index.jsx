import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/authPages/Login";
import AuthLayout from "../layouts/authLayout";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
          </Route>

          <Route element={<DefaultLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
