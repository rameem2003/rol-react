import React from "react";
import "./project.css";
import { Link } from "react-router-dom";

import androidLogo from "../../assets/android.png";
import projectPic from "../../../public/android_control_surveillace_robot/gallery/clip1.jpg";
import wowchat from "../../../public/siteprojects/wowchat/wowChat.png";
function Project() {
  return (
    <div className="projects">
      <div className="container">
        <div className="title">
          <h1>Our Projects</h1>
        </div>

        <div className="project-box">
          <img src={projectPic} alt="" />

          <div className="project-inner">
            <div className="project-inner-text">
              <h1>Android Control Surveilance Robot</h1>
              <h2>
                <Link to="/android-control-surveilance-robot">
                  View {">>>"}
                </Link>
              </h2>
            </div>
          </div>
        </div>

        <div className="our_android_projects">
          <h1>Our Android Projects</h1>
          <img src={androidLogo} alt="" />
          <Link to="/appgallery">Let's Check Out</Link>
        </div>

        <div className="siteProject">
          <img src={wowchat} alt="" />
          <div className="siteProjectInner">
            <h1>WOW Chat</h1>
            <p>A Chating Application for Web and windows oparating system</p>
            <h3>by Mahmmood Hassan Rameem</h3>
            <a href="https://getstarted-wowchat.netlify.app/" target="_blank">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
