import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProdcutSlider } from "../../redux/productact";
import "./CarouselBoot.css";

const CarouselBoot = () => {
  const dispatch = useDispatch();
  // SLIDER
  const slid = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.slider;
  });

  useEffect(() => {
    dispatch(getProdcutSlider());
  }, []);

  return (
    <div className="carousel_container">
      <Carousel className="carousel" controls={false}>
        {slid
          ? slid.map((slid, index) => (
              <Carousel.Item interval={1000} key={index}>
                <img src={slid} alt="First slide" className="carousel_img" />
              </Carousel.Item>
            ))
          : null}
      </Carousel>
    </div>
  );
};

export default CarouselBoot;
