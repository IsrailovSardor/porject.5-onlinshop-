import React from "react";
import { Carousel } from "react-bootstrap";
import caros from "../../assets/img/caros.png";
import './CarouselBoot.css'

const CarouselBoot = () => {
  return (
    <div className="carousel_container">
      <Carousel className="carousel" controls={false}>
        <Carousel.Item interval={1000}>
          <img src={caros} alt="First slide" className="carousel_img"/>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={caros} alt="Second slide" className="carousel_img"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={caros} alt="Third slide" className="carousel_img"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={caros} alt="Third slide" className="carousel_img"/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBoot;
