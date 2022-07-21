// import Data from "./data";
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateView from "./components/screens/create/CreateView.js";
import Home from "./components/screens/Home.js";
import AdminLogin from "./account/AdminLogin.js";
import AdminSignup from "./account/AdminSignup.js";
import FirstPage from "./FirstPage.js";
import ForgotPassword from "./account/ForgotPassword.js";
import TeacherDetails from "./components/screens/detail/TeacherDetails.js";
import Table from "./components/screens/Table.js";
import Complaints from "./components/screens/complaints/Complaints.js";
import ComplaintDetail from "./components/screens/complaints/ComplaintDetail.js";
import Reports from "./components/screens/reports/Reports.js";
import { LoginContext } from "./context/ContextProvider.js";
import { getUserDetails } from "./utils/common-utils.js";
import ReportDetails from "./components/screens/reports/ReportDetails.js";
function App() {
  const {account,setAccount} = useContext(LoginContext);
  useEffect(() => {
      setAccount(() => getUserDetails());
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminSignup" element={<AdminSignup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/create" element={<CreateView />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<TeacherDetails />} />
          <Route path="/table" element={<Table />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/complaint/:id" element={<ComplaintDetail />} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/reportDetails" element={<ReportDetails/>} />

          <Route path="/" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
