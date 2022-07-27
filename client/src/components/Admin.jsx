import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <nav className="footer">
      <div>
        <Link to='/admin' className="links">Admin Login</Link>
      </div>
    </nav>
  )
}

export default Admin