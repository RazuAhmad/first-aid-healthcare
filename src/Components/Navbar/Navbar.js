import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
const Navbar = () => {
  const { newUser } = UseAuth();
  return (
    <div className="navbar">
      <div className="navLogo">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div>
        <ul className="navLink">
          <li>
            <Link style={{ textDecoration: "none" }} to="/home">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/ourServices">
              Our Services
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/aboutUs">
              About Us
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/signIn">
              Sign in
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/appointment">
              Appointment
            </Link>
          </li>
          {/* {newUser?.email && (
            <Link style={{ textDecoration: "none" }}>
              logged In as {newUser?.displayName}
            </Link>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
