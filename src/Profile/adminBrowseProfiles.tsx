import React from "react";
import { getAllUsers } from "../Firebase/firestoreClient";
import { Link } from "react-router-dom";
import { useUserAuth } from "../Firebase/AuthContext";
import { Form } from "react-bootstrap";
import AdminRateComponent from "./adminRateComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BannerImage from "../images/movie-bg-img-1.png";

export default function AdminBrowseProfiles() {
  const [users, setUsers] = React.useState<any[]>();
  const fetchData = async () => {
    try {
      const userArr = await getAllUsers();
      setUsers(userArr);
    } catch (error) {
      console.error("Error getting user data:", error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ backgroundImage: `url(${BannerImage})`, paddingLeft:"20px", backgroundSize: "cover", height: "100vh", 
    display:'flex', flexDirection:'row',justifyContent:'flex-start', overflowX: "auto"}}>
        <button className="backButton"><Link to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link></button>
      {users &&
        users.map((profiles) => (
          <div key={profiles.id} style={{padding:20}}>
            <h2>User: {profiles.username}</h2>
            <h2>Email : {profiles.email}</h2>
            <h2>Movies Watched:</h2>
            <div className='adminMovieContainer'>
            {profiles.movies && profiles.movies.length > 0 ? (
              profiles.movies.map((movie: any) => (
                <div key={movie.id} className='individualMovieContainer'>
                    <AdminRateComponent email={profiles.email} movie={movie}/>
                </div>
              ))
            ) : (
              <p>None</p>
            )}
            </div>
          </div>
        ))}
    </div>
  );
}
