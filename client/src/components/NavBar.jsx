import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="header">
      <div>
        <Link to='/' className="links">Home</Link>
        <Link to='/shows' className="links">Shows</Link>
        <Link to='/volunteers' className="links">Volunteers</Link>
      </div>
    </nav>
  )
}

export default NavBar