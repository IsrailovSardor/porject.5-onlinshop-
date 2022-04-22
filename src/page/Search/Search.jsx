import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
// MUI
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// COMPONENT
import Scroll from "../../components/Scroll/Scroll";


const fetchData = (value) => {
  return axios
    .get(`http://localhost:3000/products?q=${value}`)
    .then((response) => response.data);
};

const Search = () => {
  // VALUE ЗАПРОС
  const value = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.value;
  });
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetchData(value).then((data) => setResult(data));
  }, [value]);

  return (
    <div>
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <p className="breadcrumb_links">Результаты поиска</p>
      </Breadcrumbs>
      <div className="collection_title">
        <p className="collection_title_text">
          Результаты поиска по запросу: {value}
        </p>
      </div>
      <div className="render_container">
        {result.map((best, index) => {
          return (
            <div className="renderCard_container" best={best} key={index}>
              {best.discount ? (
                <div className="renderCard_sale">
                  <p>{best.discountSale}</p>
                </div>
              ) : (
                ""
              )}
              <div className="bestseller_icon">
                <IconButton>
                  <Checkbox
                    icon={
                      <FavoriteBorderIcon
                        sx={{ color: "#E5271B", fontSize: 30 }}
                      />
                    }
                    checkedIcon={
                      <FavoriteIcon sx={{ color: "#E5271B", fontSize: 30 }} />
                    }
                  />
                </IconButton>
              </div>
              <div className="renderCard_block_img">
                <img src={best.img[0]} alt="" />
              </div>
              <div className="renderblock_info">
                <div className="renderblock_text">
                  <Link
                    to={`/card/${best.id}`}
                    className="renderblock_text_title"
                  >
                    {best.title}
                  </Link>
                  <p className="renderblock_text_sale">{best.sell} р</p>
                  <p className="renderblock_text_size">Размер: {best.size}</p>
                </div>
                <div className="renderblock_color">
                  {best.color
                    ? best.color.map((item) => (
                        <div
                          className="renderblock_color_row"
                          style={{ background: item }}
                        ></div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <section className="collection_section_news">
        <div className="collection_title">
          <p className="collection_title_text">Возможно Вас заинтересует</p>
        </div>
        {/* <News /> */}
      </section>
    </div>
  );
};

export default Search;
