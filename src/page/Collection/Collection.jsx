import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Collection.css";
import axios from "axios";
// COMPONENTS
import Scroll from "../../components/Scroll/Scroll";
import Counris from "../../components/Plagin/Counris";
import Pagin from "../../components/Plagin/Pagin";
import { ReactComponent as Right } from "../../assets/icon/right.svg";
import { ReactComponent as Left } from "../../assets/icon/left.svg";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";

const Collection = () => {
  // plaginat
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(8);
  useEffect(() => {
    const getCounries = async () => {
      const res = await axios.get("http://localhost:3000/collection");
      setCountries(res.data);
    };
    getCounries();
  }, []);
  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const correntCounry = countries.slice(firstCountryIndex, lastCountryIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="collection_container">
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <p className="breadcrumb_links">Коллекция</p>
      </Breadcrumbs>
      <section className="collection_section">
        <div className="collection_titles">
          <p className="collection_title_text">Коллекция</p>
          <Counris countries={correntCounry} />
        </div>
        <div className="collection_title_btn">
          <button className="next_btn" onClick={prevPage}>
            <Left className="rigt_btn_pl" />
          </button>
          <Pagin
            paginate={paginate}
            countriesPerPage={countriesPerPage}
            totalCounris={countries.length}
          />
          <button onClick={nextPage} className="next_btn">
            <Right className="rigt_btn_pl" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Collection;
