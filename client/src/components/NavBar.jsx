import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="header">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/shows'>Shows</Link>
        <Link to='/volunteers'>Volunteers</Link>
      </div>
    </nav>
  )
}

export default NavBar