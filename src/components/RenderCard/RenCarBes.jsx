import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RenCarBes.css";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addCarFav } from "../../redux/actions";
import { getProdcutBest } from "../../redux/actions/productact";

const RenCarBes = ({ game }) => {
  const dispatch = useDispatch();
  const addFavorite = (bestsellers) => {
    dispatch(addCarFav(bestsellers));
  };
  // BESTSELLER
  const bestseller = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.bestsellerlimit;
  });
  const [limit, setLimit] = useState(4);
  useEffect(() => {
    dispatch(getProdcutBest(limit));
  }, [limit]);

  return (
    <section className="bestseller_container">
      <div className="bestseller_title">
        <p className="bestseller_title_text">Хит продаж</p>
      </div>
      <div className="render_container">
        {bestseller.map((best) => {
          return (
            <div className="renderCard_container">
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
      <div className="bestseller_title">
        <button
          className="bestseller_title_btn"
          onClick={() => setLimit(limit + 4)}
        >
          Еще
        </button>
      </div>
    </section>
  );
};

export default RenCarBes;
