import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './gallery.css'

import g0 from "../../assets/our_gallery/gallery0.jpg";
import g1 from "../../assets/our_gallery/gallery1.jpg";
import g2 from "../../assets/our_gallery/gallery2.jpg";
import g3 from "../../assets/our_gallery/gallery3.jpg";
import g4 from "../../assets/our_gallery/gallery4.jpg";
import g5 from "../../assets/our_gallery/gallery5.jpg";
import g6 from "../../assets/our_gallery/gallery6.jpg";
import g7 from "../../assets/our_gallery/gallery7.jpg";
import g8 from "../../assets/our_gallery/gallery8.jpg";
import g9 from "../../assets/our_gallery/gallery9.jpg";
import g10 from "../../assets/our_gallery/gallery10.jpg";
import g11 from "../../assets/our_gallery/gallery11.jpg";
import g12 from "../../assets/our_gallery/gallery12.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <div class="container">
        <div class="title">
          <h1>Our Memories ❤</h1>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g0}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g3}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g4}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g5}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g6}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g7}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g8}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g9}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g10}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g11}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g12}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
