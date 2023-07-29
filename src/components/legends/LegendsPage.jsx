import React, { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import Slider from "react-slick";

import { legendsData } from "../../data/legendsData";
import "./legendspage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LegendsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [legends, setLegedns] = useState(legendsData);

  return (
    <div className="members">
      <div class="container">
        <div className="title">
          <h1>Our Members</h1>
        </div>

        <div className="members-list" id="members-list">
          <Slider {...settings}>
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
                      <FaFacebook />
                    </a>
                    <a href={legend.github}>
                      <FaGithub />
                    </a>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default LegendsPage;
