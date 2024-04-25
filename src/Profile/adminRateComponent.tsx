import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addMovie } from "../Firebase/firestoreClient";

export default function AdminRateComponent({ email, movie }: { email: any, movie: { title: string, rating: string, review: string } }) {
    console.log(movie);
  const [rating, setRating] = useState(movie.rating || 0);
  const [review, setReview] = useState(movie.review || "");

  const handleSubmit = async () => {
    try {
      await addMovie(email, { title: movie.title, rating: rating, review: review });
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  return (
    <>
      <p>
        <Link to={`/search/${movie.title}`}>{movie.title}</Link>
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicRating">
          <div className="slider-container">
            <input type="range" min={0} max={10} step={0.5} value={rating} onChange={(e) => setRating(e.target.value)} />
            <span className="slider-value">{rating}/10</span>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicReview">
          <Form.Control type="review" value={review} placeholder="Review" onChange={(e) => setReview(e.target.value)} />
        </Form.Group>
        <button type="submit">Change Rating</button>
      </Form>
    </>
  );
}
