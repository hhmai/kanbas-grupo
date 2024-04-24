import React from "react";
import { getAllUsers } from "../Firebase/firestoreClient";
import { Link } from "react-router-dom";
import { useUserAuth } from "../Firebase/AuthContext";
import { Form } from "react-bootstrap";
import AdminRateComponent from "./adminRateComponent";

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

  const { user } = useUserAuth();

  return (
    <div>
      <h1> Admin Dashboard</h1>
      {users &&
        users.map((profiles) => (
          <div key={profiles.id}>
            <h2>User: {profiles.username}</h2>
            <h2>Email : {profiles.email}</h2>
            <h2>Movies Watched:</h2>
            {profiles.movies && profiles.movies.length > 0 ? (
              profiles.movies.map((movie: any) => (
                <div key={movie.id}>
                    <AdminRateComponent email={profiles.email} movie={movie}/>
                </div>
              ))
            ) : (
              <p>None</p>
            )}
          </div>
        ))}
      <Link to="/">Go Back</Link>
    </div>
  );
}
