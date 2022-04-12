import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import "./CollectionId.css";
import Scroll from "../../components/Scroll/Scroll";
import { Swiper, SwiperSlide } from "swiper/react";

import { blue } from "@mui/material/colors";
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
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const fetchDataCol = (id) => {
  return axios
    .get(`http://localhost:3000/collection/${id}`)
    .then((response) => response.data);
};
const fetchDataNews = () => {
  return axios
    .get(`http://localhost:3000/news`)
    .then((response) => response.data);
};

const fetchData = (id) => {
  return axios
    .get("http://localhost:3000/bestseller")
    .then((response) => response.data);
};

const CollectionId = () => {
  const [bestseller, setBestseller] = useState([]);
  useEffect(() => {
    fetchData().then((data) => setBestseller(data));
  }, []);

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchDataNews().then((data) => setNews(data));
  }, []);
  // const [changeMode, setChangeMode] = useState(false);
  // const show = () => {
  //   setChangeMode(true);
  // };
  // const hide = () => {
  //   setChangeMode(false);
  // };

  const [collection, setCollection] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchDataCol(id).then((data) => setCollection(data));
  }, []);

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
      <div className="collectionId_card">
        <div className="bestseller_titles">
          <p className="bestseller_title_texts">{collection.title}</p>
        </div>
        <div className="bestseller_sale">
          {bestseller.map((best) => {
            return (
              <div className="bestseller_card">
                <div className="bestseller_icon">
                  <IconButton>
                    <Checkbox
                      {...label}
                      icon={
                        <FavoriteBorderIcon
                          sx={{ color: blue[800], fontSize: 30 }}
                        />
                      }
                      checkedIcon={
                        <FavoriteIcon sx={{ color: blue[800], fontSize: 30 }} />
                      }
                    />
                  </IconButton>
                </div>
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={best.img} alt="" className="bestseller_img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={best.img1} alt="" className="bestseller_img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={best.img2} alt="" className="bestseller_img" />
                  </SwiperSlide>
                </Swiper>
                <div className="bestseller_text">
                  <Link to={`/card/${best.id}`}>
                    <p className="text_title">{best.title}</p>
                  </Link>
                  <p className="text_sell">{best.sell}</p>
                  <p className="text_size">Размер: {best.size}</p>
                </div>
                <div className="bestseller_color">
                  <div className="color1"></div>
                  <div className="color2"></div>
                  <div className="color3"></div>
                  <div className="color4"></div>
                  <div className="color5"></div>
                  <div className="color6"></div>
                  <div className="color7"></div>
                  <div className="color8"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p>
            -----------------------------------------------------------КНОПКА
            БУДЕТ
          </p>
        </div>
      </div>
      <div className="collectionId_card">
        <div className="bestseller_titles">
          <p className="bestseller_title_texts">Новинки</p>
        </div>
        <div className="bestseller_sale">
          {news.map((news) => {
            return (
              <div className="news_cards">
                <div className="bestseller_icon">
                  <IconButton>
                    <Checkbox
                      {...label}
                      icon={
                        <FavoriteBorderIcon
                          sx={{ color: blue[800], fontSize: 30 }}
                        />
                      }
                      checkedIcon={
                        <FavoriteIcon sx={{ color: blue[800], fontSize: 30 }} />
                      }
                    />
                  </IconButton>
                </div>
                <div className="news_cards_sale">
                  <p>50%</p>
                </div>
                <div className="news_cards_img">
                  <img src={news.img} alt="" />
                </div>
                <div className="news_cards_info">
                  <div className="cards_block">
                    <div className="cards_sale">
                      <p className="cards_sale_one">{news.sell}</p>
                      <p className="cards_sale_two">{news.sellNews}</p>
                    </div>
                    <p className="cards_sale_title">{news.title}</p>
                    <p className="cards_sale_size">Размеры: {news.size}</p>
                  </div>
                  <div className="news_colors">
                    <div className="color1"></div>
                    <div className="color2"></div>
                    <div className="color3"></div>
                    <div className="color4"></div>
                    <div className="color5"></div>
                    <div className="color6"></div>
                    <div className="color7"></div>
                    <div className="color8"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionId;
