import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./AuthContext";
import { addUser, updateUser } from "./firestoreClient";
import BannerImage from "../images/movie-bg-img-1.png";
import "./styles.css";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [password, setPassword] = useState("");
	const [userName, setUserName] = useState("");
	const [admin, setAdmin] = useState(false);
	const { signUp, addUserName } = useUserAuth();
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signUp(email, password);
			await addUserName(userName);
			await addUser(email, admin, userName);
			navigate("/");
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<>
			<div className="p-4 box firebaseBackground" style={{ backgroundImage: `url(${BannerImage})` }}>
				<div className="firebaseBox">
					<h2 className="mb-3 firebaseTitle">Firebase Auth Signup</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3 firebaseForm" controlId="formBasicEmail">
							<Form.Control type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
						</Form.Group>
						<Form.Group className="mb-3 firebaseForm" controlId="formBasicUserName">
							<Form.Control type="text" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />
						</Form.Group>
						<Form.Group className="mb-3 firebaseForm" controlId="formBasicPassword">
							<Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
						</Form.Group>
						<Form.Group className="mb-3 formLabel" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Admin" onChange={(e) => setAdmin(e.target.checked)} />
						</Form.Group>

						<div className="d-grid gap-2">
							<Button className="firebaseButton" variant="primary" type="Submit">
								Sign Up
							</Button>
						</div>
					</Form>
					<div className="p-4 box mt-3 text-center formLabel">
						Already have an account?
						<Link className="firebaseButton" to="/login">
							Log In
						</Link>
					</div>
					<div className="p-4 box mt-3 text-center formLabel">
						Changed your mind?
						<Link className="firebaseButton" to="/">
							Back to Home
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
