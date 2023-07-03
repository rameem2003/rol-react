import React, { useState } from "react";
import logo from "../../assets/logo/logo.jpg";
import "./navber.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navber() {

    const [toggle, setToogle] = useState(false);

    const handleToggle = () => {
        setToogle(!toggle)
        console.log(toggle);
    }

    const navoff = () => {
        setToogle(false)
    }

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
            <h1>ROL</h1>
          </Link>

          <div className="tog" onClick={handleToggle}>
            {toggle ? <FaTimes/> : <FaBars/>}
          </div>
        </div>

        <ul className={`menu ${toggle ? 'active' : ''}`} onClick={navoff}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/legends">Legends</Link>
          </li>
          <li>
            <Link to="/ourcontents">Our Contents</Link>
          </li>
          <li>
            <Link to="/projects">Our Projects</Link>
          </li>
          <li>
            <Link to="/appgallery">App Gellary</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navber;
