import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/movie-bg-img-1.png";
import "../Home/styles.css";
import { useUserAuth } from "../Firebase/AuthContext";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Firebase/firestoreClient";
import { useState, useEffect } from "react";
import { DisplayMovies } from "./displayMovies";

function Home() {
  const [personalMovies, setPersonalMovies] = useState([{ title: "dune" }, { title: "the godfather" }, { title: "the dark knight" }, { title: "wall-e" }, { title: "Spirited Away" }, { title: "Aladdin" }]);
  const navigate = useNavigate();
  const { user, logOut } = useUserAuth();
  const [userRole, setUserRole] = useState(false);
  const fetchData = async () => {
    if (user && user.email) {
      try {
        const userData = await getUser(user.email);
        console.log(user.email);
        setUserRole(userData.admin);
        setPersonalMovies(userData.movies);
      } catch (error) {
        console.error("Error getting user data:", error);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="homePage" style={{ overflow: "auto" }}>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> Movie Site </h1>
          <p> Review all your favorite movies</p>
          <p>{user ? (userRole ? `Welcome ${user.displayName}. You are an Admin!` : `Welcome ${user.displayName}`) : "Welcome Guest"}</p>
          <Link to="/search">
            <button> Search </button>
          </Link>
          {userRole ? <Link to="/profile/admin">
                <button> Admin  </button>
              </Link> : <Link to="/profile/browse">
                <button> Browse Profiles </button>
              </Link>}
          {user ? (
            <>
              <Link to="/profile">
                <button> Profile </button>
              </Link>
              <button onClick={handleLogout}> Logout </button>
            </>
          ) : (
            <>
            <Link to="/signup">
              <button> Signup/Login </button>
            </Link>
            </>
          )}
        </div>
      </div>
      <p style={{ color: "white", justifyContent: "center", display: "flex", alignItems: "center", height: "1vh" }}> 
      {user ? (personalMovies.length > 0 ? 'Your rated movies!' : 'You have no reviews to show!') : 'Popular movies to check out!' }
      </p>
      <div style={{ display: "flex", flexDirection: "row", overflow: "auto"}}>
        {personalMovies.map((e) => (
          <DisplayMovies e={e.title} key={e.title} />
        ))}
      </div>
    </div>
  );
}
export default Home;
