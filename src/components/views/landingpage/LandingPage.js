import React, { useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  useEffect(() => {
    // axios.get().then((res) => console.log("진입" + res));
  }, []);

  return (
    <div>
      <h1>Here is Main Page also Landing Page</h1>
    </div>
  );
};

export default LandingPage;
