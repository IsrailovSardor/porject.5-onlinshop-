import React from "react";
import "./Footer.css";
import logo from "../../assets/img/logofoot.png";
import tel from "../../assets/icon/tel.svg";
import mail from "../../assets/icon/mail.svg";
import ins from "../../assets/icon/instagram.svg";
import teleg from "../../assets/icon/telegram.svg";
import wat from "../../assets/icon/wa.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_block">
        <div className="footer_block_img">
          <img src={logo} alt="" className="block_img" />
        </div>
        <div className="footer_block_info">
          <div className="block_info_one">
            <div className="info_one_title">
              <p>Компания</p>
            </div>
            <div className="info_one_link">
              <p className="info_one_link_descr">
                <Link to="/about" className="link">
                  О нас
                </Link>
              </p>
              <p className="info_one_link_descr">
                <Link to="/about" className="link">
                  Новости
                </Link>
              </p>
              <p className="info_one_link_descr">
                <Link to="/about" className="link">
                  Помощь{" "}
                </Link>
              </p>
            </div>
          </div>
          <div className="block_info_one">
            <div className="info_one_title">
              <p>Контакты</p>
            </div>
            <div className="info_one_link">
              <div className="info_link_flex">
                <img src={tel} alt="" className="info_link_img" />
                <a href="tel:+996 500 123 456" className="link">
                  {" "}
                  +996 500 123 456
                </a>
              </div>
              <div className="info_link_flex">
                <img src={tel} alt="" className="info_link_img" />
                <a href="tel:+996 500 123 456" className="link">
                  {" "}
                  +996 500 123 456
                </a>
              </div>
              <div className="info_link_flex">
                <img src={mail} alt="" className="info_link_img" />
                <a href="mailto:mail@gmail.com" className="link">
                  {" "}
                  mail@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="block_info_one">
            <div className="info_one_title">
              <p>Мы в социальных сетях:</p>
            </div>
            <div className="info_one_link">
              <div className="info_link_flex">
                <img src={ins} alt="" className="info_link_img" />
                <a
                  href="http://https://oc.kg/#/movie/id/19435"
                  target="_blank"
                  className="link"
                >
                  Instagram
                </a>
              </div>
              <div className="info_link_flex">
                <img src={teleg} alt="" className="info_link_img" />
                <a
                  href="http://https://oc.kg/#/movie/id/19435"
                  target="_blank"
                  className="link"
                >
                  Telegram
                </a>
              </div>
              <div className="info_link_flex">
                <img src={wat} alt="" className="info_link_img" />
                <a
                  href="http://https://oc.kg/#/movie/id/19435"
                  target="_blank"
                  className="link"
                >
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_desrc">
        <p>Developed by Zeon 2022</p>
      </div>
    </div>
  );
};

export default Footer;
