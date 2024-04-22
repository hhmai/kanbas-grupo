import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as client from "../client";

function Register() {
	const [error, setError] = useState("");
	const [user, setUser] = useState({ username: "", password: "" });
	const navigate = useNavigate();
	const register = async () => {
		try {
			await client.signup(user);
      // LINK THIS PART TO PROFILE
			navigate("/profile/:id");
		} catch (err: any) {
			setError(err.response.data.message);
		}
	};
	return (
		<div>
			<h1>Create an Account</h1>
			{error && <div>{error}</div>}
			<input
				value={user.username}
				placeholder="Username"
				onChange={(e) =>
					setUser({
						...user,
						username: e.target.value,
					})
				}
			/>
			<input
				value={user.password}
				placeholder="Password"
				onChange={(e) =>
					setUser({
						...user,
						password: e.target.value,
					})
				}
			/>
			<select id="role">
				<option selected>Select a Role</option>
				<option value="review">Reviewer</option>
				<option value="admin">Admin</option>
			</select>
			<button onClick={register}> Sign Up </button>
      <h3>Already have an account?</h3>
      <Link className="button" to="/Login">Log In</Link>
		</div>
	);
}

export default Register;
