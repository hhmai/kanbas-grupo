import React from "react";
import { getMovieByTitle } from "../OMDB/client";
import { Link } from "react-router-dom";

export const DisplayMovies = (e) => {
  const [movie, setMovie] = React.useState();
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getMovieByTitle(e.e);
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, [e]);

  return (
    <>
      {movie ? (
        <div>
          <Link to={`/search/${movie.Title}`} rel="noreferrer">
            <img className="movie-poster" src={movie.Poster} alt={movie.Title} style={{ width: "250px", height: "300px", objectFit: "contain" }} target="_blank" rel="noreferrer" />
          </Link>
          <h2 style={{ color: "white", textAlign: "center", maxWidth: "250px", overflowWrap: "break-word" }}>{movie.Title}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
