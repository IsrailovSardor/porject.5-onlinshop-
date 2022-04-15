import React, { useEffect, useState } from "react";

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


const Best = ({ bestseller }) => {
  return (
    <div className="colrender_container">
      {bestseller.map((best, i) => (
              <div className="renderCard_container">
              {best.discount ? (
                <div className="renderCard_sale">
                  <p>50%</p>
                </div>
              ) : (
                ""
              )}
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
                  <div
                    className="renderblock_color_row"
                    style={{ background: best.col1 }}
                  ></div>
                  <div
                    className="renderblock_color_row"
                    style={{ background: best.col2 }}
                  ></div>
                  <div
                    className="renderblock_color_row"
                    style={{ background: best.col3 }}
                  ></div>
                  <div
                    className="renderblock_color_row"
                    style={{ background: best.col4 }}
                  ></div>
                  <div
                    className="renderblock_color_row"
                    style={{ background: best.col5 }}
                  ></div>
                  <div
                    className="renderblock_color_row"
                    style={{ background: best.col6 }}
                  ></div>
                  <div
                    className="renderblock_color_row"
                    style={{ background: best.col7 }}
                  ></div>
                  <div
                    className="renderblock_color_row"
                    style={{ background: best.col8 }}
                  ></div>
                </div>
              </div>
            </div>
      ))}
    </div>
  );
};

export default Best;
