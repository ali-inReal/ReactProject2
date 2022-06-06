import React from "react";
import "./Login.css";

export default function Login(props) {
  return (
    <form className="LoginContainer">
      <h1 className="header">Login</h1>
      <input
        className="mail"
        value={props.email}
        placeholder="Email"
        type="email"
        onChange={props.mail}
      />
      <input
        className="pass"
        value={props.password}
        placeholder="password"
        type="password"
        onChange={props.pass}
      />
      <input className="sub" type="submit" />
    </form>
  );
}
