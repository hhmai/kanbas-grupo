import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/movie-bg-img-1.png";
import "./styles.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Movie Site </h1>
        <p> Review all your favorite movies</p>
        <Link to="/">
           <button> Login </button>{/* should read profile if logged in */}
        </Link>
        <Link to="/">
          <button> Search </button>
        </Link>
        <Link to="/">
          <button> About </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;