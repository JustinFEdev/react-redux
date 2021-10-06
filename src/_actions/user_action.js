import axios from "axios";
export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return {
    type: "LOGIN_USER",
    payload: request,
  };
}
