import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <ul className="leftSide">
        <li >
          <Link to="/" style={{ textDecoration: "none", color: "#020A68" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#020A68" }}
          >
            About
          </Link>
        </li>
      </ul>
      <ul className="rightSide">
        <li>
          <Link
            to="/lognin"
            style={{ textDecoration: "none", color: "#020A68" }}
          >
            Log In
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#020A68" }}
          >
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
