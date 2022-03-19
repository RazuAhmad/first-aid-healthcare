import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselCompo = () => {
  return (
    <Carousel className="main">
      <Carousel.Item>
        <img
          style={{ height: "600px" }}
          className="d-block w-100"
          src="https://i.ibb.co/Fz04N7d/2134120.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "600px" }}
          src="https://i.ibb.co/DbH4ZLr/pexels-gustavo-fring-4173239.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "600px" }}
          src="https://i.ibb.co/5xJrvM3/pexels-mart-production-7089019.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCompo;

//
// https://i.ibb.co/GM47jyY/677515.jpg
