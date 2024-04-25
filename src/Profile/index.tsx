import { useEffect, useState } from "react";
import { useUserAuth } from "../Firebase/AuthContext";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {updateUser} from "../Firebase/firestoreClient"
import { updateEmail } from "firebase/auth";
import "./styles.css";

export default function Profile() {
    const { user, updateUserEmail, logOut, addUserName } = useUserAuth();
    const [email, setEmail] = useState(user.email);
    const [username, setUsername] = useState(user.displayName);
    const navigate = useNavigate();
    useEffect(() => {
        setEmail(user.email);
      }, [user.email]);
    
    const handleUpdateEmail = async () => {
        await updateUserEmail(email);
        await addUserName(username);

        
    }
    const handleSubmit = (e: any) => {
            e.preventDefault();
            handleUpdateEmail();
            updateUser(user.email, email, username);
            
            alert("Email/Name updated successfully!")
    }
    const handleLogout = async () => {
            try {
                await logOut();
                navigate("/");
                window.location.reload();
            } catch (error: any) {
                console.log(error.message);
            }
        };
    return (
        <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder={`${email}`} value={`${email}`} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder={`${username}`} value={`${username}`} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <button type="submit">
                Update
            </button>
        </Form>
        <Link to="/">Go Back</Link>
        <br></br>
        <button onClick={handleLogout}> Logout </button>
        
        </div>
    )
}