import React, { useEffect, useState } from "react";
import { fetchDataPubl } from "../../components/data";
import Scroll from "../../components/Scroll/Scroll";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import "./Public.css";
const Public = () => {
  const [publ, setPublic] = useState([]);
  useEffect(() => {
    fetchDataPubl().then((data) => setPublic(data));
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
      <p className="public_title">Публичная оферта </p>
      <div className="public_block">
        <p className="public_descr">{publ.pub1}</p>
      </div>
    </div>
  );
};

export default Public;
