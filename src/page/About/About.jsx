import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import "./About.css";
import about1 from "../../assets/img/about.png";
import about2 from "../../assets/img/about1.png";
import about3 from "../../assets/img/about2.png";
import Scroll from "../../components/Scroll/Scroll";

const About = () => {
  return (
    <div className="aboutMe_container">
      <Scroll/>
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <p className="breadcrumb_links">О нас</p>
      </Breadcrumbs>
      <div className="aboutMe_block">
        <div className="aboutMe_block_img">
          <div className="aboutMe_block_imgOne">
            <img src={about1} alt="" className="block_imgOne"/>
            <img src={about2} alt="" className="block_imgOne"/>
          </div>
          <div className="aboutMe_block_imgTwo">
            <img src={about3} alt="" className="block_imgOne"/> 
          </div>
        </div>
        <div className="aboutMe_block_text">
          <p className="block_text_title">О нас</p>
          <p className="block_text_text">
            У нас Вы найдёте всё, что Вам так нужно. Ассортимент магазина
            постоянно расширяется и дополняется в зависимости от пожеланий
            клиентов. Женская одежда из наших коллекций – это комфортная,
            стильная и качественная одежда не только на каждый день, но и для
            любых ситуаций по доступным ценам.Натуральные материалы, продуманные
            силуэты, современный дизайн и возможность легкого сочетания моделей
            помогут Вам всегда оставаться в центре внимания и чувствовать себя
            уместно в любой ситуации.Если Вы любите одеваться ярко, модно и
            оригинально, у нас Вы найдете все необходимое, чтобы всегда быть в
            центре внимания. У нас большая коллекция для любого торжества и
            праздника, которая сможет удовлетворить вкус самой взыскательной
            модницы! А для деловых ситуаций, в которых Вам непременно нужно
            выглядеть элегантно и стильно, мы предлагаем Вам одежду из коллекции
            "деловой стиль и офис". Мода постоянно диктует нам свои требования и
            для современной девушки, желающей идти в ногу со временем, важно
            иметь возможность постоянно пополнять свой гардероб стильной
            одеждой.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
