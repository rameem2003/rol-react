import React, { useState } from "react";
import { appsData } from "../../appsData";

import "./appgallery.css";
import { Link } from "react-router-dom";

function Appgallery() {
  const [apps, setApps] = useState(appsData);
  // console.log(apps);

  return (
    <div className="appgallery">
      <div className="container">
        <div class="title">
          <h1>Our Projects</h1>
        </div>

        <div className="apps_section">
          {apps.map((app) => {
            return (
              <div className="app" key={app.id}>
                <img src={app.appIcon} alt="" />
                <h3>{app.appName}</h3>
                <span>by {app.author}</span>

                <Link className="appDetails" to={app.pageTitle}>Details</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Appgallery;
