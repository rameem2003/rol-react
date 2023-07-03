import React from "react";

function Content(props) {
  return (
    <div className="content">
      <img src={props.img} alt="" />

      <div className="details">
        <h2>{props.playlistName}</h2>
        <h4>by {props.playListCreator}</h4>

        <a href={props.link}>Go to YouTube</a>
      </div>
    </div>
  );
}

export default Content;
