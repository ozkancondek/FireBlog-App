import React from "react";
import Authorization from "../components/Authorization";

export const Login = () => {
  return <Authorization method="Login" />;
};
//login komponentinin tek yaptigi sey authorizationi cagirmak oldu

export const Register = () => {
  return <Authorization method="Register" />;
};
