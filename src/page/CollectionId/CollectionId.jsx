import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import "./CollectionId.css";
import Scroll from "../../components/Scroll/Scroll";
import { ReactComponent as Right } from "../../assets/icon/right.svg";
import { ReactComponent as Left } from "../../assets/icon/left.svg";
import Best from "../../components/Plagin/Best";
import PaginBest from "../../components/Plagin/PlagBes";
import { useDispatch, useSelector } from "react-redux";
import { getProdcutCollectionId } from "../../redux/actions/productact";
import News from "../../components/NewsCart/News";

const CollectionId = () => {
  // PLAGIN
  const [bestseller, setBestseller] = useState([]);
  const [bestsellerPage, setCurrentPage] = useState(1);
  const [bestsellerPerPage] = useState(12);
  useEffect(() => {
    const getCounries = async () => {
      const res = await axios.get("http://localhost:3000/bestseller");
      setBestseller(res.data);
    };
    getCounries();
  }, []);
  const lastCountryIndex = bestsellerPage * bestsellerPerPage;
  const firstCountryIndex = lastCountryIndex - bestsellerPerPage;
  const correntCounry = bestseller.slice(firstCountryIndex, lastCountryIndex);
  const paginatee = (pageNumbere) => setCurrentPage(pageNumbere);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  // ID COL
  const { id } = useParams();
  const dispatch = useDispatch();
  const collection = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.collectionId;
  });
  useEffect(() => {
    dispatch(getProdcutCollectionId(id));
  }, [id]);

  return (
    <div className="collectionId_container">
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <Link to="/collection" className="breadcrumb_link">
          Коллекция
        </Link>
        <p className="breadcrumb_links">{collection.title}</p>
      </Breadcrumbs>
      <section className="collection_section">
        <div className="collection_title">
          <p className="collection_title_text">{collection.title}</p>
        </div>
        <div className="colrender_container">
          <Best bestseller={correntCounry} />
        </div>
        <div className="collection_title_btn">
          <button className="next_btn" onClick={prevPage}>
            <Left className="rigt_btn_pl" />
          </button>
          <PaginBest
            paginatee={paginatee}
            bestsellerPerPage={bestsellerPerPage}
            totalCounris={bestseller.length}
          />
          <button onClick={nextPage} className="next_btn">
            <Right className="rigt_btn_pl" />
          </button>
        </div>
      </section>

      <section className="collection_section_news">
        <div className="collection_title">
          <p className="collection_title_text">Новинки</p>
        </div>
        <News />
      </section>
    </div>
  );
};

export default CollectionId;
