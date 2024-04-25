import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./AuthContext";
import BannerImage from "../images/movie-bg-img-1.png";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { logIn } = useUserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await logIn(email, password);
			navigate("/");
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<>
			<div className="p-4 box firebaseBackground" style={{ backgroundImage: `url(${BannerImage})` }}>
				<div className="firebaseBox">
					<h2 className="mb-3 firebaseTitle">Firebase Auth Login</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3 firebaseForm" controlId="formBasicEmail">
							<Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
						</Form.Group>

						<Form.Group className="mb-3 firebaseForm" controlId="formBasicPassword">
							<Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
						</Form.Group>

						<div className="d-grid gap-2">
							<Button className="firebaseButton" variant="primary" type="Submit">
								Log In
							</Button>
						</div>
					</Form>
					<div className="p-4 box mt-3 text-center formLabel">
						Don't have an account?
						<Link className="firebaseButton" to="/signup">
							Sign Up
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

export default Login;
