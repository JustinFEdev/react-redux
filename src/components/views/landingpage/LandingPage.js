import React, { useState, useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const [data, setData] = useState("");
  console.log(data.data);

  const loginButton = () => {};

  useEffect(() => {}, []);
  return (
    <div>
      <h1 style={{ color: "red" }}>Client Side</h1>
      <h1>Here is Main Page also Landing Page</h1>
      <a href="/loginPage">login</a>
    </div>
  );
};

export default LandingPage;
