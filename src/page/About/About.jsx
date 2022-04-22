import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
// COMPONENTS
import Scroll from "../../components/Scroll/Scroll";
// REDUX
import { getProdcutAbout } from "../../redux/productact";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  // about
  const dispatch = useDispatch();
  const about = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.about;
  });
  useEffect(() => {
    dispatch(getProdcutAbout());
  }, []);

  return (
    <div className="aboutMe_container">
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <p className="breadcrumb_links">О нас</p>
      </Breadcrumbs>
      <div className="aboutMe_block">
        <div className="aboutMe_block_img">
          <div className="aboutMe_block_imgOne">
            <img src={about.img1} alt="" className="block_imgOne" />
            <img src={about.img2} alt="" className="block_imgOne" />
          </div>
          <div className="aboutMe_block_imgTwo">
            <img src={about.img3} alt="" className="block_imgOne" />
          </div>
        </div>
        <div className="aboutMe_block_text">
          <p className="block_text_title">О нас</p>
          <p className="block_text_text">{about.text}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
