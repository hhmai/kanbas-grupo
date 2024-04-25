import React from "react";
import { addMovie } from "../Firebase/firestoreClient";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useUserAuth } from "../Firebase/AuthContext";
import { Link } from "react-router-dom";
import BannerImage from "../images/movie-bg-img-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
    <div style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: "cover", height: "100vh", display:'flex', justifyContent:'center', alignItems:'center'}}>
      <button className="backButton">
        <Link to={`/search/${movieTitle}`}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </button>
      <div className="rateBackground" style={{alignItems:'center'}}>
        <h1> Write your rating for the movie: {movieTitle}</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicRating">
            <div className="slider-container">
              <input type="range" min={0} max={10} step={0.5} value={rating} onChange={(e) => setRating(e.target.value)} />
              <span className="slider-value">{rating}/10</span>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReview">
            <Form.Control as="textarea" type="review" placeholder="Review" className="bigTextarea" onChange={(e) => setReview(e.target.value)} />
          </Form.Group>
          <button className="searchButton" type="submit">Rate</button>
          <br />
        </Form>
      </div>
    </div>
  );
}
