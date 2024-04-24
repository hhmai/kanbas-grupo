import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../Firebase/AuthContext";
import { getUser } from "../Firebase/firestoreClient";

export const DisplayMovies = ({ e }) => {
  const [currentMovie, setCurrentMovie] = useState("");

  const { user } = useUserAuth();

  // Update the current movie when the prop changes
  useEffect(() => {
    setCurrentMovie(e);
  }, [e]);
  return (
    <div>
      {currentMovie ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ color: "black", textAlign: "left" }}>{currentMovie.Title}</h2>
          <div>
            <img className="movie-poster" src={e.Poster} alt={currentMovie.Title} style={{ width: "500px", height: "500px", objectFit: "fill" }} />
            <br/>
            {user ? (<Link to={`/ratepage/${currentMovie.Title}`} style={{ textDecoration: "none" }}>
              <button style={{ padding: "10px 20px", borderRadius: "5px", background: "red", color: "#fff", border: "none" }}>Rate This Movie!</button>
            </Link>) : (<div/>)}
            <button style={{ padding: "10px 20px", borderRadius: "5px", background: "red", color: "#fff", border: "none" }} onClick={() => window.open(`https://www.imdb.com/title/${currentMovie.imdbID}/`, "_blank")}>IMDB</button>
          </div>
          <h4 style={{ color: "black", textAlign: "left" }}>Description: {currentMovie.Plot}</h4>
          <h4 style={{ color: "black", textAlign: "left" }}>Actors: {currentMovie.Actors}</h4>
          <h4 style={{ color: "black", textAlign: "left" }}>Rating: {currentMovie.Ratings[0].Value}</h4>
        </div>
      ) : (
        <br></br>
      )}
    </div>
  );
};
