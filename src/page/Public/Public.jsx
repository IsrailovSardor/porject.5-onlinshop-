import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Public.css";
// COMPONENTS
import Scroll from "../../components/Scroll/Scroll";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getProdcutPublic } from "../../redux/productact";

const Public = () => {
  const dispatch = useDispatch();
  // publics
  const publics = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.public;
  });
  useEffect(() => {
    dispatch(getProdcutPublic());
  }, []);

  return (
    <div className="public_container">
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <p className="breadcrumb_links">Публичная оферта</p>
      </Breadcrumbs>
      <div className="public_const">
        <p className="public_title">Публичная оферта </p>
        <div className="public_block">
          <p className="public_descr"> {publics.publuch1}</p>
        </div>
      </div>
    </div>
  );
};

export default Public;
