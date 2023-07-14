import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AppBar from "../pages/AppBar/AppBar";
import Home from "../pages/Home/Home";

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        {/* <Route path="/" element={<AppBar />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};
