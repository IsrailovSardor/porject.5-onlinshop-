import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getFavorites, getTrash } from "../../redux/productact";
import {
  addAndDeleteProductInFavorites,
  addAndDeleteProductInTrash,
} from "../../utils/utilis";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "./Cart.css";
// COMPONENTS
import { ReactComponent as Pls } from "../../assets/icon/pls.svg";
import { ReactComponent as Min } from "../../assets/icon/min.svg";
import { ReactComponent as Clo } from "../../assets/icon/close.svg";
import { changeCountProduct } from "../../utils/matematika";

const CartTrash = ({ product }) => {
  const dispatch = useDispatch();

  const trash = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.trash;
  });

  useEffect(() => {
    dispatch(getTrash());
  }, []);

  const [count, setCount] = useState(1);
  useEffect(() => {
    changeCountProduct(count, product.product.id)
    dispatch(getCart())
}, [count])
  return (
    <div className="cartItem_block">
      <button
        className="cartItem_block_close"
        onClick={() => {
          addAndDeleteProductInTrash(product.product);
          dispatch(getTrash());
        }}
      >
        <Clo className="cartItem_block_close_svg" />
      </button>
      <div className="cartItem_block_img">
        <img src={product.product.img[0]} alt="" />
      </div>
      <div className="cartItem_block_info">
        <div className="cartItem_title1">
          <p className="cartItem_title_text">{product.product.title}</p>
        </div>
        <div className="cartItem_title2">
          <p className="cartItem_title_size">Размер: {product.product.size}</p>
          <p className="cartItem_title_size">
            Цвет :{" "}
            <div
              className="renderblock_color_row"
              style={{
                marginLeft: 6,
                background: product.product.color[product.color],
              }}
            ></div>{" "}
          </p>
          <div className="cartItem_title2_flex">
            <p className="cartItem_title2_sale1">{product.product.sell} р</p>

            {product.product.sellNews ? (
              <p className="cartItem_title2_sale2">
                {product.product.sellNews} р
              </p>
            ) : null}
          </div>
        </div>
        <div className="cartItem_btm">
          <button
            className="cartItem_btm_min"
            onClick={() => {
              if (count <= 1) {
                return false;
              } else {
                setCount(count - 1);
              }
            }}
          >
            <Min className="cartItem_btm_min_svg" />
          </button>
          <p className="cartItem_btm_leng">{count}</p>
          <button
            className="cartItem_btm_min"
            onClick={() => setCount(count + 1)}
          >
            <Pls className="cartItem_btm_min_svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTrash;
