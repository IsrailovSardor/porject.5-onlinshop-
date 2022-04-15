import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Scroll from "../../components/Scroll/Scroll";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import "./SaleCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Shop } from "../../assets/icon/shop.svg";
import { ReactComponent as Love } from "../../assets/icon/love.svg";
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
import {
  fetchDataBestsellerId,
  fetchDataCollectionId,
  fetchDataNews,
} from "../../components/data";
import { addCart } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import News from "../../components/NewsCart/News";
import { getProdcutBestId, getProdcutNewId } from "../../redux/actions/productact";
// import { setItemInCart } from "../../redux/cart/reducer";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SaleCard = () => {
  // const dispatch = useDispatch();
  const addProduct = (bestseller) => {
    dispatch(addCart(bestseller));
  };

//  const { id } = useParams();
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    fetchDataCollectionId(id).then((data) => setCollection(data));
  }, []);

  // const [bestseller, setBestseller] = useState([]);
  // useEffect(() => {
  //   fetchDataBestsellerId(id).then((data) => setBestseller(data));
  // }, []);


  const { id } = useParams();
  const dispatch = useDispatch();
  const bestseller = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.bestsellerId;
  });
  useEffect(() => {
    dispatch(getProdcutBestId(id));
  }, [id]);




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
          {bestseller.img
            ? bestseller.img.map((item) => (
                <img src={item} alt="" className="img_block_img" />
              ))
            : null}
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
                {bestseller.color
                  ? bestseller.color.map((item) => (
                      <div
                        className="renderblock_color_row"
                        style={{ background: item }}
                      ></div>
                    ))
                  : null}
              </div>
            </div>
            <div className="info_block_flex">
              <p className="info_block_title_sale">{bestseller.sell} р</p>
              <p className="info_block_descr_sale">{bestseller.sellNews} р</p>
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
            <button
              className="cardid_info_btn_shop"
              onClick={() => addProduct(bestseller)}
            >
              <Shop width={20} height={20} className="cardid_info_btn_svg" />
              Добавить в корзину
            </button>

            <button className="cardid_info_btn_love">
              <Love width={20} height={20} className="cardid_info_btn_svg1" />
            </button>
          </div>
        </div>
      </div>
      <section className="collection_section_news">
        <div className="collection_title">
          <p className="collection_title_text">Похожие товары</p>
        </div>
        <News />
      </section>
    </div>
  );
};

export default SaleCard;
