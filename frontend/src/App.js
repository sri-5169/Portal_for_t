// import Data from "./data";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateView from "./admin/components/screens/create/CreateView.js";
import Home from "./admin/components/screens/Home.js";
import AdminLogin from "./admin/account/AdminLogin.js";
import AdminSignup from "./admin/account/AdminSignup.js";
import FirstPage from "./FirstPage.js";
import ForgotPassword from "./admin/account/ForgotPassword.js";
import DetailView from "./admin/components/screens/detail/DetailView.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />}></Route>
          <Route path="/adminSignup" element={<AdminSignup />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/create" element={<CreateView />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<DetailView />}></Route>
          <Route path="/" element={<FirstPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
