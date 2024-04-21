import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../client";

function Register() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const register = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      {error && <div>{error}</div>}
      <input value={user.username} onChange={(e) => setUser({
          ...user, username: e.target.value })} />
      <input value={user.password} onChange={(e) => setUser({
          ...user, password: e.target.value })} />
      <button onClick={register}> Sign Up </button>
    </div>
  );
}

export default Register;