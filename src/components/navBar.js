import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="text-center bg-dark p-3">
      <Link className="navLink" to="/add">
        ADD NEW POST
      </Link>
      {/* <Link className="navLink" to="/edit">edit</Link> */}
      {/* <Link className="navLink" to="/delete">delete</Link> */}
      <Link className="navLink" to="/">
        ALL POSTS
      </Link>
    </div>
  );
}

export default NavBar;
