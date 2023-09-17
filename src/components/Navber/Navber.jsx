import React, { useState } from "react";
import logo from "../../assets/logo/logo.jpg";
import "./navber.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navber() {
  const [toggle, setToogle] = useState(false);

  const handleToggle = () => {
    setToogle(!toggle);
    console.log(toggle);
  };

  const navoff = () => {
    setToogle(false);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
            <h1>ROL</h1>
          </Link>

          <div className="tog" onClick={handleToggle}>
            {toggle ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <ul className={`menu ${toggle ? "active" : ""}`} onClick={navoff}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/legends">Legends</NavLink>
          </li>
          <li>
            <NavLink to="/ourcontents">Our Contents</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Our Projects</NavLink>
          </li>
          <li>
            <NavLink to="/appgallery">App Gellary</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navber;
