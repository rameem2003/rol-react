import React, { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";

import "./legendspage.css";

import { legendsData } from "../../data/legendsData";

function LegendsPage() {
  const [legends, setLegedns] = useState(legendsData);

  return (
    <div className="members">
      <div class="container">
        <div className="title">
          <h1>Our Members</h1>
        </div>

        <div className="members-list" id="members-list">
          {legends.map((legend) => {
            return (
              <div className="member">
                <div class="img">
                  <img src={legend.img} alt="" />
                </div>

                <div class="name">
                  <h3>{legend.name}</h3>
                </div>

                <div class="post">
                  <h4>{legend.position}</h4>
                </div>

                <div class="link">
                  <a href={legend.facbook}>
                    <FaFacebook/>
                  </a>
                  <a href={legend.github}>
                    <FaGithub/>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LegendsPage;
