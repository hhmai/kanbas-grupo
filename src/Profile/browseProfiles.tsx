import React from "react";
import { getAllUsers } from "../Firebase/firestoreClient";
import { Link } from "react-router-dom";

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
    <div>
        {users &&
            users.map((user) => (
                <div key={user.id}>
                    <h1>User: {user.username}</h1>
                    <h2>Movies Watched:</h2>
                    {user.movies && user.movies.length > 0 ? user.movies.map((movie: any) => <p key={movie.id}>
                            <Link to={`/search/${movie.title}`}>{movie.title}</Link></p>) : <p>None</p>}
                </div>
            ))}
      <Link to="/">Go Back</Link>
    </div>
  );
}
