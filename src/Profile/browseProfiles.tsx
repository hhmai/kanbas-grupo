import React from "react";
import { getAllUsers } from "../Firebase/firestoreClient";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BannerImage from "../images/movie-bg-img-1.png";

export default function BrowseProfiles() {
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
            users.map((user) => (
                <div key={user.id} style={{padding:20}}>
                    <h1>User: {user.username}</h1>
                    <h2>Movies Watched:</h2>
                    <div className='adminMovieContainer'>
                    {user.movies && user.movies.length > 0 ? user.movies.map((movie: any) => 
                    <div key={movie.id}>
                            <Link to={`/search/${movie.title}`}>{movie.title}</Link></div>) : <p>None</p>}
                            </div>
                </div>
            ))}
    </div>
);
            }
 // <div>
    //     {users &&
    //         users.map((user) => (
    //             <div key={user.id}>
    //                 <h1>User: {user.username}</h1>
    //                 <h2>Movies Watched:</h2>
    //                 {user.movies && user.movies.length > 0 ? user.movies.map((movie: any) => <p key={movie.id}>
    //                         <Link to={`/search/${movie.title}`}>{movie.title}</Link></p>) : <p>None</p>}
    //             </div>
    //         ))}
    //   <Link to="/">Go Back</Link>
    // </div> 
