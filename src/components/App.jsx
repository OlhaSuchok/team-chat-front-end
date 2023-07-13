import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
