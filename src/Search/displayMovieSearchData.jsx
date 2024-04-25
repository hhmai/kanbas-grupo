import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../Firebase/AuthContext";
import { getUser } from "../Firebase/firestoreClient";
import "./styles.css";

export const DisplayMovies = ({ e }) => {
  const [currentMovie, setCurrentMovie] = useState("");

  const { user } = useUserAuth();

  // Update the current movie when the prop changes
  useEffect(() => {
    setCurrentMovie(e);
  }, [e]);
  return (
    <div>
      <br></br>
      <hr></hr>
      {currentMovie ? (
        <div className="searchPadding backgroundMovie" style={{ display: "flex", flexDirection: "column" }}>
          <h1 className="titleMovie" style={{ color: "black", textAlign: "left" }}>{currentMovie.Title}</h1>
          <div>
            <img className="movie-poster" src={e.Poster} alt={currentMovie.Title} style={{ width: "360px", height: "500px", objectFit: "fill" }} />
            <br></br><br />
            {user ? (<Link to={`/ratepage/${currentMovie.Title}`} style={{ textDecoration: "none" }}>
              <button className="rateButton" style={{ padding: "10px 20px", borderRadius: "5px", background: "red", color: "#fff", border: "none" }}>Rate This Movie</button>
            </Link>) : (<div />)}
            <button className="rateButton" style={{ padding: "10px 20px", borderRadius: "5px", background: "red", color: "#fff", border: "none" }} onClick={() => window.open(`https://www.imdb.com/title/${currentMovie.imdbID}/`, "_blank")}>IMDB</button>
          </div>
          <br></br>
          <p style={{ color: "black", textAlign: "left" }}><h2>Description:</h2> {currentMovie.Plot}</p>
          <p style={{ color: "black", textAlign: "left" }}><h2>Actors:</h2> {currentMovie.Actors}</p>
          <h2 style={{ color: "black", textAlign: "left" }}>Rating: {currentMovie.Ratings[0].Value}</h2>
          <br></br>
        </div>
      ) : (
        <br></br>
      )}
    </div>
  );
};
