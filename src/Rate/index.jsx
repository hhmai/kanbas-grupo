import React from "react";
import { addMovie } from "../Firebase/firestoreClient";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles.css';
import { useUserAuth } from "../Firebase/AuthContext";
import { Link } from "react-router-dom";

export default function Rate() {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const { movieTitle } = useParams();
  const [rating, setRating] = React.useState("5");
  const [review, setReview] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMovie(user.email, { title: movieTitle, rating: rating, review: review });
    } catch (error) {
      console.error("Error adding movie:", error);
    }
    navigate(`/search/${movieTitle}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicRating">
      <div className='slider-container'>
        <input type="range" min={0} max={10} step={0.5} value={rating} onChange={(e) => setRating(e.target.value)} />
        <span className="slider-value">{rating}/10</span>
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicReview">
        <Form.Control type="review" placeholder="Review" onChange={(e) => setReview(e.target.value)} />
      </Form.Group>
      <button type="submit">Rate</button>
      <br/>
      <Link to={`/search/${movieTitle}`}>Go back</Link>
    </Form>
  );
}
