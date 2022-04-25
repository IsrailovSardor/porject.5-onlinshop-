import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// MUI
import Checkbox from "@mui/material/Checkbox";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// COMPONENT
import Scroll from "../../components/Scroll/Scroll";

// MUI
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, getProdcutBestLimit } from "../../redux/productact";
import { addAndDeleteProductInFavorites } from "../../utils/utilis";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CartNews from "../../components/Cart/CartNews";

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

  const dispatch = useDispatch();
  // FAVORITES
  const favorites = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.favorites;
  });

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  let checkInFavorites = favorites.some(
    (item) => item.product.id === result.id
  );

  // news
  const news = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.bestsellerlimit;
  });
  const [limit] = useState(5);
  useEffect(() => {
    dispatch(getProdcutBestLimit(1, limit));
  }, [limit]);

  return (
    <div>
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <p className="breadcrumb_links">Результаты поиска</p>
      </Breadcrumbs>
      <div className="search_constner">
        <p className="collection_title_text">
          Результаты поиска по запросу: {value}
        </p>
        {value ? (
          <div className="render_container">
            {result.map((product, index) => {
              return (
                <div className="block_card">
                  <div className="section_img">
                    {product.discount ? (
                      <div className="block_dicount">
                        <p>{product.discountSale} %</p>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="block_favorites">
                      <IconButton
                        onClick={() => {
                          addAndDeleteProductInFavorites(product);
                          dispatch(getFavorites());
                        }}
                      >
                        {checkInFavorites ? (
                          <FavoriteIcon sx={{ color: "red" }} />
                        ) : (
                          <FavoriteBorderIcon sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </div>
                    <div className="block_swiper">
                      <Swiper
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                      >
                        {product.img
                          ? product.img.map((item) => (
                              <SwiperSlide>
                                <img
                                  src={item}
                                  alt=""
                                  className="swiper_imgsss"
                                />
                              </SwiperSlide>
                            ))
                          : null}
                      </Swiper>
                    </div>
                  </div>
                  <div className="section_text">
                    <div className="block_text">
                      <Link to={`/card/${product.id}`} className="text_title">
                        {product.title}
                      </Link>
                      <p className="text_sell">{product.sell} р</p>
                      <p className="text_size">Размер: {product.size}</p>
                    </div>
                    <div className="block_color">
                      {product.color
                        ? product.color.map((item) => (
                            <div
                              className="block_color_row"
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
        ) : (
          <section className="collection_section_newspostres">
            <p className="collection_sec">
              По Вашему запросу ничего не найдено.
            </p>
            <p className="collection_title_text">Возможно Вас заинтересует</p>
            <div className="collection_title22">
              {news.map((best) => (
                <div className="mini_card">
                  <CartNews product={best} key={best.id} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Search;
