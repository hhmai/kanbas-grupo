import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../client";
import * as client from "../client";

function Login() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const login = async () => {
    await client.signin(credentials);
    // LINK THIS PART TO PROFILE
    navigate("/profile");
  };
  return (
    <div>
      <h1>Log In</h1>
      <input value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/>
      <input value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
      <button onClick={login}> Log In </button>
    </div>
  );
}

export default Login;