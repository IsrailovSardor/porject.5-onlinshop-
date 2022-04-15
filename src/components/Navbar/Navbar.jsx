import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import love from "../../assets/icon/love.svg";
import trash from "../../assets/icon/shop.svg";
import search from "../../assets/icon/search.svg";
import "./Navbar.css";
import { fetchDataInform } from "../data";
import { useSelector } from "react-redux";

const Navbar = ({ itemsCount }) => {
  const state = useSelector((state) => state.handleCart)
  const states = useSelector((state) => state.handlefavor)
  // MOBILE
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const [inform, setInform] = useState([]);
  useEffect(() => {
    fetchDataInform().then((data) => setInform(data));
  });
  return (
    <div className="header_container">
      {/* MOBILE */}
      <div className="mobile_mav">
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <img src={logo} alt="logo" className="mobile_logo" />
        <button className="mobile_seacr">
          <img src={search} alt="" className="mobile_img" />
          <span className="cart-button">20</span>
        </button>
      </div>
      <div className={active}>
        <div className="mobile_one">
          <p>Меню</p>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <div className="mobile_link">
          <Link to="/about" className="mobile_links_text">
            О нас
          </Link>
          <Link to="/collection" className="mobile_links_text">
            Коллекции
          </Link>
          <Link to="/news" className="mobile_links_text">
            Новости
          </Link>
        </div>
        <div className="mobile_line"></div>
        <div className="mobile_love">
          <img src={love} alt="love" className="mobile__links_icon" />
          <Link to="/" className="mobile_links">
            Избранное
          </Link>
        </div>
        <div className="mobile_love">
          <img src={trash} alt="shop" className="mobile__links_icon" />
          <Link to="/" className="mobile_links">
            Корзина
          </Link>
        </div>
        <div className="mobile_contact">
          <p className="mob_tel">Свяжитсь с нами:</p>
          <p className="tell_number">
            Тел:
            <a href="tel:+996000000000" className="tell_numbers">
              {inform.number1}
            </a>
          </p>
        </div>
      </div>

      {/* WEB */}
      <div className="header_link">
        <div className="header_links">
          <Link to="/about" className="header_links_text">
            О нас
          </Link>
          <Link to="/collection" className="header_links_text">
            Коллекции
          </Link>
          <Link to="/news" className="header_links_text">
            Новости
          </Link>
        </div>
        <div className="header_tell">
          <p className="tell_number">
            Тел:
            <a href="sss" className="tell_numbers">
              {inform.number1}
            </a>
          </p>
        </div>
      </div>
      <div className="header_logo">
        <div className="header_img">
          <Link to="/" className="header_links_text">
            <img src={inform.logo} alt="logo" className="img_logo" />
          </Link>
        </div>
        <div className="header_search">
          <form className="header_input">
            <input type="text" placeholder="Поиск" className="header_inputs" />
            <button className="header_input_button">
              <img src={search} alt="" />
            </button>
          </form>
          <div className="header_shops">
            <div className="header_love">
            <div className="cart-button">
              <img src={love} alt="love" className="search_link_icon" />
              <span className="cart-button_icon">{states.length}</span>
              </div>
              <Link to="/favorites" className="search_link">
                Избранное
              </Link>
            </div>
            <div className="header_line"> {/*line*/}</div>
            <div className="header_love">
              <div className="cart-button">
                <img src={trash} alt="shop" className="search_link_icon" />
                <span className="cart-button_icon">{state.length}</span>
              </div>
              <Link to="/basket" className="search_link">
                Корзина
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
