import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { blue } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import right from "../../assets/icon/right.svg";
import { ReactComponent as Right } from "../../assets/icon/right.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const fetchDataBest = () => {
  return axios
    .get("http://localhost:3000/bestseller")
    .then((response) => response.data);
};

const fetchDataNews = () => {
  return axios
    .get("http://localhost:3000/news")
    .then((response) => response.data);
};
const fetchDataCollection = () => {
  return axios
    .get("http://localhost:3000/collection")
    .then((response) => response.data);
};

const Bestseller = () => {
  // BESTSSELLER
  const [bestseller, setBestseller] = useState([]);
  useEffect(() => {
    fetchDataBest().then((data) => setBestseller(data));
  }, []);
  const [changeMode, setChangeMode] = useState(false);
  const show = () => {
    setChangeMode(true);
  };
  const hide = () => {
    setChangeMode(false);
  };
  // NEWS
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchDataNews().then((data) => setNews(data));
  }, []);
  const [newsMode, setNewsMode] = useState(false);
  const shows = () => {
    setNewsMode(true);
  };
  const hides = () => {
    setNewsMode(false);
  };
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
    <div className="cardss_container">
      {/* BESTSELLER */}
      <div className="news_container">
        <div className="bestseller_title">
          <p className="bestseller_title_text">Хит продаж</p>
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
                  <p className="text_title">{best.title}</p>
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
          {changeMode ? (
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
                            <FavoriteIcon
                              sx={{ color: blue[800], fontSize: 30 }}
                            />
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
                        <img
                          src={best.img1}
                          alt=""
                          className="bestseller_img"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={best.img2}
                          alt=""
                          className="bestseller_img"
                        />
                      </SwiperSlide>
                    </Swiper>
                    <div className="bestseller_text">
                      <p className="text_title">{best.title}</p>
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
          ) : (
            ""
          )}
        </div>
        <div className="bestseller_title">
          {changeMode ? (
            <button className="bestseller_title_button" onClick={hide}>
              Скрыть
            </button>
          ) : (
            <button className="bestseller_title_button" onClick={show}>
              Еще
            </button>
          )}
        </div>
      </div>
      {/* NEWS */}
      <div className="news_container">
        <div className="bestseller_title">
          <p className="bestseller_title_text">Новинки</p>
        </div>
        <div className="bestseller_sale">
          {news.map((news) => {
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
                    <img src={news.img} alt="" className="bestseller_img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={news.img1} alt="" className="bestseller_img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={news.img2} alt="" className="bestseller_img" />
                  </SwiperSlide>
                </Swiper>
                <div className="bestseller_text">
                  <p className="text_title">{news.title}</p>
                  <p className="text_sell">{news.sell}</p>
                  <p className="text_size">Размер: {news.size}</p>
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
        {newsMode ? (
          <div className="bestseller_sale">
            {news.map((news) => {
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
                          <FavoriteIcon
                            sx={{ color: blue[800], fontSize: 30 }}
                          />
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
                      <img src={news.img} alt="" className="bestseller_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={news.img1} alt="" className="bestseller_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={news.img2} alt="" className="bestseller_img" />
                    </SwiperSlide>
                  </Swiper>
                  <div className="bestseller_text">
                    <p className="text_title">{news.title}</p>
                    <p className="text_sell">{news.sell}</p>
                    <p className="text_size">Размер: {news.size}</p>
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
        ) : (
          ""
        )}
        <div className="bestseller_title">
          {newsMode ? (
            <button className="bestseller_title_button" onClick={hides}>
              Скрыть
            </button>
          ) : (
            <button className="bestseller_title_button" onClick={shows}>
              Еще
            </button>
          )}
        </div>
      </div>
      {/* COLLECT */}
      <div className="news_container">
        <div className="bestseller_title">
          <p className="bestseller_title_text">Коллекция</p>
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
                  <button className="collection_card_btn">
                    Смотреть все
                    <Right className="collection_card_btn_icon" />
                  </button>
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
        <div className="bestseller_title">
          {collectionMode ? (
            <button className="bestseller_title_button" onClick={hidess}>
              Скрыть
            </button>
          ) : (
            <button className="bestseller_title_button" onClick={showss}>
              Еще
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
