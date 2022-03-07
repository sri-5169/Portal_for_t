// import Data from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/account/Login.js";
import Table from "./components/screens/Table.js";
// import Login from "./components/account/Login.js";
function App() {
  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Table />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
