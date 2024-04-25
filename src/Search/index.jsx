import React from "react";
import { getMovieByTitle, getMovieByTitleYear } from "../OMDB/client";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { DisplayMovies } from "./displayMovieSearchData";
import { useParams } from "react-router-dom";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BannerImage from "../images/movie-bg-img-1.png";

function Search() {
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState("");
  const [movie, setMovie] = React.useState();
  const { movieTitle } = useParams();
  const movieTitleParam = movieTitle || "";
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      if (!year) {
        try {
          const movieData = await getMovieByTitle(movieTitleParam);
          setMovie(movieData);
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      } else {
        try {
          const movieData = await getMovieByTitleYear(movieTitleParam, year);
          setMovie(movieData);
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      }
    };

    fetchData();
  }, [title]);

  async function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${title}`);
    window.location.reload();
  }

  return (
    <div style={{ backgroundImage: `url(${BannerImage})` }}>
      <button className="backButton"><Link to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link></button>
      <div className="background">
        <h1 className="title">
          Find a Movie
        </h1>
        <Form className="searchPadding" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <h3>Search Movie Title</h3>
            <Form.Control className="searchBar" type="title" placeholder="Movie Title" onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicYear">
            <h3>Search Movie Year</h3>
            <Form.Control className="searchBar" type="year" placeholder="2023" onChange={(e) => setYear(e.target.value)} />
          </Form.Group>
          <br></br>
          <button className="searchButton" type="submit">Search</button>
        </Form>
        </div>
        <div className="p-4 box mt-3 te t-center">
        {movieTitleParam === "" ? null : <DisplayMovies e={movie} />}
      </div>
    </div>
  );
}

export default Search;
