import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <Link className="grupo nav-item left" to="/Home">Grupo</Link>
            <input placeholder="Search"/>
            <Link className="nav-item right" to="/Login">Sign In</Link>
            <Link className="nav-item right" to="/Profile">Profile</Link>
        </div>
    );
};

export default Nav;