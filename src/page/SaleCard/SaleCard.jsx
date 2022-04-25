import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SaleCard.css";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  getFavorites,
  getProdcutBestId,
  getProdcutBestLimit,
  getProdcutCollectionId,
  getTrash,
} from "../../redux/productact";
import {
  addAndDeleteProductInFavorites,
  addAndDeleteProductInTrash,
} from "../../utils/utilis";
// COMPONENTS
import Scroll from "../../components/Scroll/Scroll";
import { ReactComponent as Shop } from "../../assets/icon/shop.svg";
import CartNews from "../../components/Cart/CartNews";

// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// SWIPER
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SaleCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // collection
  // ID COL
  const collection = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.collectionId;
  });
  useEffect(() => {
    dispatch(getProdcutCollectionId(id));
  }, [id]);
  // bestseller
  const bestseller = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.bestsellerId;
  });
  useEffect(() => {
    dispatch(getProdcutBestId(id));
  }, [id]);
  // news
  const news = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.bestsellerlimit;
  });
  const [limit] = useState(5);
  useEffect(() => {
    dispatch(getProdcutBestLimit(1, limit));
  }, [limit]);
  // favorites
  const favorites = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.favorites;
  });
  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  let checkInFavoritess = favorites.some(
    (item) => item.product.id === bestseller.id
  );
  // trash
  const trash = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.trash;
  });
  useEffect(() => {
    dispatch(getTrash());
  }, []);
  let checkInTrash = trash.some((items) => items.product.id === bestseller.id);
  // naviget
  const naviget = useNavigate();
  const link = () => {
    if (trash) {
      naviget("/basket");
    }
  };

  const [zoom, setZoom] = useState(false);
  const [zomimg, setZomImg] = useState(0);
  const [color, setColor] = useState(0);




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
            ? bestseller.img.map((item, index) => (
                <img
                  src={item}
                  alt=""
                  className="img_block_img"
                  key={index}
                  onClick={() => {
                    setZoom(true);
                    setZomImg(index);
                  }}
                />
              ))
            : null}
          {zoom ? (
            <div className="modal_img-zoom" onClick={() => setZoom(false)}>
              <img
                src={bestseller.img[zomimg]}
                alt=""
                className="modal_img_img"
              />
            </div>
          ) : null}
        </div>
        <div className="cardid_info_block">
          <div className="cardid_info_text">
            <p className="info_block_opis">{bestseller.title}</p>
            <div className="info_block_flex">
              <p className="info_block_title">Артикул:</p>
              <p className="info_block_descr">{bestseller.article}</p>
            </div>
            <div className="info_block_flex">
              <p className="info_block_title">Цвет :</p>
              <div className="news_colorsss">
                {bestseller.color
                  ? bestseller.color.map((item, index) => (
                      <div
                        className="renderblock_color_row"
                        style={{ background: item }}
                        onClick={() => setColor(index)}
                        key={index}
                      ></div>
                    ))
                  : null}
              </div>
            </div>
            <div className="info_block_flex">
              <p className="info_block_title_sale">{bestseller.sell} р</p>
            </div>
            <div>
              <p className="info_block_title">О товаре: </p>
              <p className="info_block_descr_about">{bestseller.descr}</p>
            </div>
            <div className="info_block_flex_js">
              <div>
                <div className="info_block_flex">
                  <p className="info_block_title">Размерный ряд: </p>
                  <p className="info_block_descr">{bestseller.size}</p>
                </div>
                <div className="info_block_flex">
                  <p className="info_block_title">Количество в линейке: </p>
                  <p className="info_block_descr">{bestseller.number}</p>
                </div>
              </div>
              <div>
                <div className="info_block_flex">
                  <p className="info_block_title">Состав ткани: </p>
                  <p className="info_block_descr">{bestseller.composition} </p>
                </div>
                <div className="info_block_flex">
                  <p className="info_block_title">Материал: </p>
                  <p className="info_block_descr">{bestseller.material} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardid_info_btn">
            {/* {checkInTrash ? (
              <button className="cardid_info_btn_shop" onClick={link}>
                <span>Перейти в корзину</span>
              </button>
            ) : ( */}
              <button
                className="cardid_info_btn_shop"
                onClick={() => {
                  addAndDeleteProductInTrash(bestseller, color);
                  dispatch(getTrash());
                }}
              >
                <Shop width={20} height={20} className="cardid_info_btn_svg" />
                <span>Добавить в корзину</span>
              </button>
            <button className="cardid_info_btn_love">
              <IconButton
                onClick={() => {
                  addAndDeleteProductInFavorites(bestseller);
                  dispatch(getFavorites());
                }}
              >
                {checkInFavoritess ? (
                  <FavoriteIcon sx={{ color: "white" }} />
                ) : (
                  <FavoriteBorderIcon sx={{ color: "white" }} />
                )}
              </IconButton>
            </button>
          </div>
        </div>
      </div>
      <section className="collection_section_newspostre">
        <p className="collection_title_textsss">Похожие товары</p>
        <div className="collection_title22">
          {news.map((best) => (
            <div className="mini_card">
              <CartNews product={best} key={best.id} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SaleCard;
