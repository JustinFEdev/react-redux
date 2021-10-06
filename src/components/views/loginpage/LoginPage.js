import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onEmailHandle = (e) => {
    setEmail(e.currentTarget.value);
    console.log(email);
  };

  const onPasswordHandle = (e) => {
    setPassword(e.currentTarget.value);
    console.log(password);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    let body = {
      email: email,
      password: password,
    };

    // dispatch(loginUser(body));

    console.log("submit email");
    console.log(email);

    console.log("submit password");
    console.log(password);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <a href="/">go back</a>
      <div
        style={{
          border: "1px solid",
          height: "350px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <form onSubmit={onSubmitHandle} style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <label>Email</label>
          <input type="email" value={email} onChange={onEmailHandle} placeholder="write your id" />
          <label>Password</label>
          <input type="password" value={password} onChange={onPasswordHandle} placeholder="write your pw" />
          <br />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
