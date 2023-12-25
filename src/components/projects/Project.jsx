import React from "react";
import { Link } from "react-router-dom";
import { ourProjects } from "../../data/ourProject";
import "./project.css";

import androidLogo from "../../assets/android.png";
import projectPic from "../../../public/android_control_surveillace_robot/gallery/clip1.jpg";
import wowchat from "../../../public/siteprojects/wowchat/wowChat.png";
import omah from "../../../public/siteprojects/omah-state/omah.png";
import brmart from "../../../public/siteprojects/brmart/brMart.png";
function Project() {
  return (
    <div className="projects">
      <div className="container">
        <div className="title">
          <h1>Our Projects</h1>
        </div>

        {ourProjects.map((project) => {
          return (
            <div className="siteProject my-5" id={project.tag}>
              <img src={project.thumb} alt="" />
              <div className="siteProjectInner">
                <h1>{project.projectName}</h1>
                <p>{project.about}</p>
                <h3>by {project.owner}</h3>
                {/* <a href={project.projectLink} target="_blank">
                  Read More
                </a> */}

                <Link to={`/project/${project.tag}`}>View</Link>
              </div>
            </div>
          );
        })}

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
      </div>
    </div>
  );
}

export default Project;
