import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import AppBar from "../pages/AppBar/AppBar";

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path={routes.MAIN_PAGE} element={<WelcomePage />} />
        <Route path={routes.REGISTER_PAGE} element={<Register />} />
        <Route path={routes.LOGIN_PAGE} element={<Login />} />
        <Route path={routes.HOME_PAGE} element={<Home />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};
