import React from "react";
import "./home.css";

import legendsPic from "../../assets/our_gallery/gallery0.jpg";
import Gallery from "../../components/imegegallery/Gallery";
import Project from "../../components/projects/Project";
import LegendsPage from "../../components/legends/LegendsPage";
import OurContents from "../../components/ourcontents/OurContents";



function Home() {
  return (
    <div>
      <div className="banner">
        <h1>Join The Republic</h1>
        <h3>Feel Like Legend</h3>
      </div>

      <div className="about">
        <div className="title">
          <h1>About Us</h1>
        </div>

        <div className="container">
          <div className="left">
            <div className="img-frame">
              <img src={legendsPic} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>Who are we ??</h1>
            <p>
              {" "}
              <h1>"</h1> This was not the case when the legend meant that the
              legend had to do something One day a group named Legends was
              opened for the purpose of group study. Then the few others were
              discussed about studying and thus the legend group was born. But
              this group is not just limited to studies, there is entertainment,
              laughter, pranks and mischief on various topics.
              <br />
              Each member in this group is different, some are very angry, some
              are stupid, some are very clever, some are very serious in
              everything, and some are very emotional. So what? At the end of
              the day we all have the same mentality & emotions.
              <br />
              If anyone has a question what is the real purpose of the legend
              group then it can be said without hesitation friendship. Next will
              come as long as we stay together so that we can complete our
              diploma life together and be connected to each other throughout
              our lives and respect each other. At the end,,,, We hope that
              someday everyone will call us legends because we want to do
              something like that. <h1>"</h1>{" "}
              <b>--- Fahmida Yeasmin, President of ROL</b>
            </p>
          </div>
        </div>
      </div>

      <Gallery/>
      
      <LegendsPage/>

      <OurContents/>

      <Project/>


    </div>
  );
}

export default Home;
