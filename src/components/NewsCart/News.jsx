import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
// MUI
// REDUX

// SWIPER


import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules



import { useDispatch, useSelector } from "react-redux";
import {
  getFavorites,
  getProdcutBestLimit,
} from "../../redux/productact";
import { addAndDeleteProductInFavorites } from "../../utils/utilis";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.bestsellerlimit;
  });
  const [limits] = useState(5);
  useEffect(() => {
    dispatch(getProdcutBestLimit(limits));
  }, [limits]);
  const favorites = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.favorites;
  });

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  let checkInFavorites = favorites.some(
    (item) => item.product.id === news.id
  );

  return (
    <div className="colrender_container">
      {news.map((news) => {
        return (
          <div className="renderNews_card">
              {news.discount ? (
          <div className="block_dicount">
            <p>{news.discountSale} %</p>
          </div>
        ) : (
          ""
        )}
        <div className="block_favorites">
          <IconButton
            onClick={() => {
              addAndDeleteProductInFavorites(news);
              dispatch(getFavorites());
            }}
          >
            {checkInFavorites ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
            <div className="news_cards_imgs">
              <img src={news.img[0]} alt="" />
            </div>
            <div className="news_cards_info">
              <div className="cards_block">
                <div className="cards_sale">
                  <p className="cards_sale_one">{news.sell} р</p>
                  <p className="cards_sale_two">{news.sellNews} р</p>
                </div>
                <p className="cards_sale_title">
                  <Link to={`/card/${news.id}`}>{news.title}</Link>
                </p>

                <p className="cards_sale_size">Размеры: {news.size}</p>
              </div>
              <div className="renderblock_color">
                <div
                  className="renderblock_color_row"
                  style={{ background: news.col1 }}
                ></div>
                <div
                  className="renderblock_color_row"
                  style={{ background: news.col2 }}
                ></div>
                <div
                  className="renderblock_color_row"
                  style={{ background: news.col3 }}
                ></div>
                <div
                  className="renderblock_color_row"
                  style={{ background: news.col4 }}
                ></div>
                <div
                  className="renderblock_color_row"
                  style={{ background: news.col5 }}
                ></div>
                <div
                  className="renderblock_color_row"
                  style={{ background: news.col6 }}
                ></div>
                <div
                  className="renderblock_color_row"
                  style={{ background: news.col7 }}
                ></div>
                <div
                  className="renderblock_color_row"
                  style={{ background: news.col8 }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
