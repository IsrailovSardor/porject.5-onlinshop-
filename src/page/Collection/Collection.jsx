import React, { useEffect, useState } from "react";
import axios from "axios";
import Scroll from "../../components/Scroll/Scroll";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import './Collection.css'
import { ReactComponent as Right } from "../../assets/icon/right.svg";

const fetchDataCollection = (id) => {
  return axios
    .get("http://localhost:3000/collection")
    .then((response) => response.data);
};
const Collection = () => {
  // COLLECTION
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    fetchDataCollection().then((data) => setCollection(data));
  }, []);
  const [collectionMode, setCollectionMode] = useState(false);
  const showss = () => {
    setCollectionMode(true);
  };
  const hidess = () => {
    setCollectionMode(false);
  };
  return (
    <div className="collection_container">
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <p className="breadcrumb_links">Коллекция</p>
      </Breadcrumbs>
      <div className="collection_block">
        <div className="bestseller_titles">
          <p className="bestseller_title_texts">Коллекция</p>
        </div>
        <div className="collection_sale">
          {collection.map((coll) => {
            return (
              <div className="collection_card">
                <div className="collection_card_block">
                  <img src={coll.img} alt="" className="collection_card_img" />
                  <p className="collection_card_text">{coll.title}</p>
                </div>
                <div className="collection_card_form">
                  {/* <button className="collection_card_btn">
                    Смотреть все
                    <Right className="collection_card_btn_icon" />
                  </button> */}
                  <Link to={`/collectionId/${coll.id}`}>
                  <button className="collection_card_btn">
                    Смотреть все
                    <Right className="collection_card_btn_icon" />
                  </button>
              </Link>
                </div>
              </div>
            );
          })}
        </div>
        {collectionMode ? (
          <div className="collection_sale">
            {collection.map((coll) => {
              return (
                <div className="collection_card">
                  <div className="collection_card_block">
                    <img
                      src={coll.img}
                      alt=""
                      className="collection_card_img"
                    />
                    <p className="collection_card_text">{coll.title}</p>
                  </div>
                  <div className="collection_card_form">
                    <button className="collection_card_btn">
                      Смотреть все
                      <Right className="collection_card_btn_icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <div className="bestseller_title_btn">
          {collectionMode ? (
            <button className="bestseller_title_button" onClick={hidess}>
              Скрыть
            </button>
          ) : (
            <button className="bestseller_title_button" onClick={showss}>
             ДОДЕЛАТЬ ______________________________________________________--
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
