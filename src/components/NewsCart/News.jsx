import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Scroll from "../../components/Scroll/Scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Right } from "../../assets/icon/right.svg";
import { ReactComponent as Left } from "../../assets/icon/left.svg";

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
import { Pagination, Navigation } from "swiper";

import {
  fetchDataNews,
  fetchDataCollectionId,
  fetchDataBestseller,
} from "../../components/data";
import Pagin from "../../components/Plagin/Pagin";
import Best from "../../components/Plagin/Best";
import PaginBest from "../../components/Plagin/PlagBes";
import { useDispatch, useSelector } from "react-redux";
import { getProdcutBest} from "../../redux/actions/productact";

const News = () => {

    const dispatch = useDispatch();
  const news = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.bestsellerlimit;
  });
  const [limits, setLimit] = useState(5);
  useEffect(() => {
    dispatch(getProdcutBest(limits));
  }, [limits]);


    return (
        <div className="colrender_container">
          {news.map((news) => {
            return (
              <div className="renderNews_card">
                <div className="bestseller_icon">
                  <IconButton>
                    <Checkbox
                      icon={
                        <FavoriteBorderIcon
                          sx={{ color: red[800], fontSize: 30 }}
                        />
                      }
                      checkedIcon={
                        <FavoriteIcon sx={{ color: red[800], fontSize: 30 }} />
                      }
                    />
                  </IconButton>
                </div>
                <div className="news_cards_sale">
                  <p>50%</p>
                </div>
                <div className="news_cards_img">
                  <img src={news.img[0]} alt="" />
                </div>
                <div className="news_cards_info">
                  <div className="cards_block">
                    <div className="cards_sale">
                      <p className="cards_sale_one">{news.sell} р</p>
                      <p className="cards_sale_two">{news.sellNews} р</p>
                    </div>
                    <p className="cards_sale_title"><Link  to={`/card/${news.id}`}>{news.title}</Link></p>
                    
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