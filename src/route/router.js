import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../components/views/layout";
import Dashboard from "../components/views/dashboard";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Toppings from "../components/views/toppings";

export default function Router(props) {
  //   const authToken = localStorage.getItem("authToken");

  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/toppings" element={<Toppings />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
}
