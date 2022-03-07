// import Data from "./data";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./admin/components/account/Login.js";
import CreateView from "./admin/components/screens/create/CreateView.js";
import DetailView from "./client/components/screens/detail/DetailView.js";
import Home from "./admin/components/screens/Home.js";
// import Login from "./components/account/Login.js";
function App() {
  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create" element={<CreateView />}></Route>
          <Route path="/detail/:adno" element={<DetailView />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
