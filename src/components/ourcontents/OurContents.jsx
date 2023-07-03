import React, { useState } from "react";
import "./ourcontents.css";
import { youtubeData } from "../../data/youtubePlalistData";
import Content from "./content";

function OurContents() {
    const [youTubeDatas, setYoutubeData] = useState(youtubeData);
  return (
    <div>
      <div className="our-contents">
        <div class="container">
          <div class="title">
            <h1>Our Contents</h1>
          </div>

          <div className="contents">
            {youTubeDatas.map((data) => {
                return <Content img = {data.thumb} playlistName = {data.plalistName} playListCreator = {data.plalistCreator} link = {data.link} key={data.id}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurContents;
