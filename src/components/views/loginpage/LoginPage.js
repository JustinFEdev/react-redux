import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onEmailHandle = (e) => {
    setEmail(e.currentTarget.value);
    console.log(Email);
  };

  const onPasswordHandle = (e) => {
    setPassword(e.currentTarget.value);
    console.log(password);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    let body = {
      email: Email,
      password: password,
    };
    // console.log("body");
    // console.log(body);
    axios
      .post("/api/users/login", body)
      .then((response) => {
        console.log("response check");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    // 디스패치
    dispatch(loginUser(body));

    console.log("submit email");
    console.log(Email);

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
          <input type="email" value={Email} onChange={onEmailHandle} placeholder="write your id" />
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
