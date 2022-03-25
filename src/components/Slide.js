import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';

export default function Slide() {
  return (
    <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/tigerwoodshero.jpeg"
      alt="Tiger Woods"
    />
    <Carousel.Caption>
      <h3>Golfing is a necessity</h3>
      <p>Grab your gears for your next round!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/rory.webp"
      alt="Rory McIlroy"
    />

    <Carousel.Caption>
      <h3>Golfing is a necessity</h3>
      <p>Grab your gears for your next round!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/dustin.jpeg"
      alt="Dustin Johnson"
    />

    <Carousel.Caption>
      <h3>Golfing is a necessity</h3>
      <p>Grab your gears for your next round!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
