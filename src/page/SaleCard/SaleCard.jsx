import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Scroll from "../../components/Scroll/Scroll";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import "./SaleCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Shop } from "../../assets/icon/shop.svg";
import { ReactComponent as Love } from "../../assets/icon/love.svg";
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
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const fetchData = (id) => {
  return axios
    .get(`http://localhost:3000/bestseller/${id}`)
    .then((response) => response.data);
};
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

const SaleCard = () => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    fetchDataCol(id).then((data) => setCollection(data));
  }, []);

  const [bestseller, setBestseller] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchData(id).then((data) => setBestseller(data));
  }, []);

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchDataNews().then((data) => setNews(data));
  }, []);
  return (
    <div className="salecard_container">
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <Link to="/collection" className="breadcrumb_link">
          Коллекция
        </Link>
        <Link to={`/collectionId/${id}`} className="breadcrumb_link">
          {collection.title}
        </Link>
        <p className="breadcrumb_links">{bestseller.title}</p>
      </Breadcrumbs>
      <div className="cardid_container">
        <div className="cardid_img_block">
          <div className="img_block">
            <img src={bestseller.img} alt="" className="img_block_img" />
            <img src={bestseller.img1} alt="" className="img_block_img" />
            <img src={bestseller.img2} alt="" className="img_block_img" />
            <img src={bestseller.img8} alt="" className="img_block_img" />
          </div>
          <div className="img_slide">
            <img src={bestseller.img4} alt="" className="img_slide_img" />
            <img src={bestseller.img5} alt="" className="img_slide_img" />
            <img src={bestseller.img6} alt="" className="img_slide_img" />
            <img src={bestseller.img7} alt="" className="img_slide_img" />
          </div>
        </div>
        <div className="cardid_info_block">
          <div className="cardid_info_text">
            <p className="info_block_opis">{bestseller.title}</p>
            <div className="info_block_flex">
              <p className="info_block_title">Артикул:</p>
              <p className="info_block_descr">{bestseller.art}</p>
            </div>
            <div className="info_block_flex">
              <p className="info_block_title">Цвет :</p>
              <div className="news_colorsss">
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
            <div className="info_block_flex">
              <p className="info_block_title_sale">{bestseller.sell}</p>
              <p className="info_block_descr_sale">{bestseller.sellNews}</p>
            </div>
            <div>
              <p className="info_block_title">О товаре: </p>
              <p className="info_block_descr_about">{bestseller.about}</p>
            </div>
            <div className="info_block_flex_js">
              <div>
                <div className="info_block_flex">
                  <p className="info_block_title">Размерный ряд: </p>
                  <p className="info_block_descr">{bestseller.size}</p>
                </div>
                <div className="info_block_flex">
                  <p className="info_block_title">Количество в линейке: </p>
                  <p className="info_block_descr">5</p>
                </div>
              </div>
              <div>
                <div className="info_block_flex">
                  <p className="info_block_title">Состав ткани: </p>
                  <p className="info_block_descr">Полиэстер </p>
                </div>
                <div className="info_block_flex">
                  <p className="info_block_title">Материал: </p>
                  <p className="info_block_descr">Полиэстер </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardid_info_btn">
            <button className="cardid_info_btn_shop">
              <Shop width={20} height={20} className="cardid_info_btn_svg" />
              Добавить в корзину
            </button>

            <button className="cardid_info_btn_love">
              <Love width={20} height={20} className="cardid_info_btn_svg1" />
            </button>
          </div>
        </div>
      </div>
      <div className="collectionId_card">
        <div className="bestseller_titles">
          <p className="bestseller_title_texts">Похожие товары</p>
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

export default SaleCard;
