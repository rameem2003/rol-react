import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/androidapps/zakat_app/zakat.png";

function Appcard(props) {
  return (
    <Link className="app" key={props.id}>
      <img src={logo} alt="" />
      <h3>{props.appName}</h3>
      <span>by Mahmood Hassan Rameem</span>
    </Link>
  );
}

export default Appcard;
