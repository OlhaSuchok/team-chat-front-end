import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showPasswordHandler } from "../../helpers/showPasswordHandler";
import {
  LoginWrapper,
  LoginTitle,
  LoginForm,
  LoginLable,
  LoginInput,
  LoginInputPassword,
  LoginButton,
  LoginButtonIcon,
  LoginInputPasswordWrapper,
  LoginButtonIconWrapper,
  LoginAuthLinkWrapper,
  LoginAuthLinkText,
  LoginAuthLink,
} from "./Login.styled";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register", { replace: true });
  };

  const showPassword = () => {
    const visibilityIcons = document.querySelector("div form div div");
    const passwordInput = document.querySelector("form .input-password-login");

    showPasswordHandler(visibilityIcons, passwordInput);
  };

  return (
    <>
      <LoginTitle>Вхід</LoginTitle>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <LoginLable>Пошта</LoginLable>
          <LoginInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Введіть пошту"
            required
          ></LoginInput>
          <LoginLable>Пароль</LoginLable>
          <LoginInputPasswordWrapper>
            <LoginInputPassword
              className="input-password-login"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Введіть пароль"
              required
            ></LoginInputPassword>
            <LoginButtonIconWrapper>
              <LoginButtonIcon size={25} onClick={showPassword} />
            </LoginButtonIconWrapper>
          </LoginInputPasswordWrapper>
          <LoginButton type="submit">Вхід</LoginButton>
        </LoginForm>
        <LoginAuthLinkWrapper>
          <LoginAuthLinkText>Немає акаунту?</LoginAuthLinkText>
          <LoginAuthLink onClick={navigateToRegister}>Реєстрація</LoginAuthLink>
        </LoginAuthLinkWrapper>
      </LoginWrapper>
    </>
  );
}
