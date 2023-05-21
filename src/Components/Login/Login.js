import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await axios
            .post("http://localhost:8080/api/auth/signin", {
              username: userName,
              password: password,
            })
            .then((e) => {
              setToken(e.data.token);
              localStorage.setItem("token", JSON.stringify(e.data));
              navigate("/home");
            })
            .catch((e) => {
              console.log(e);
            });
          console.log(token);
        }}
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            userName
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
