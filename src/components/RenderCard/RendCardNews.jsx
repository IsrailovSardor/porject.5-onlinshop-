import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDataNews } from "../data";
import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { getProdcutBestG } from "../../redux/actions/productact";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const RendCardNews = () => {
  // NEWS
  const dispatch = useDispatch();
  const news = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.bestsellerlimitg;
  });
  const [limitg, setLimitg] = useState(4);
  useEffect(() => {
    dispatch(getProdcutBestG(limitg));
  }, [limitg]);


  return (
    <section className="bestseller_container">
      <div className="bestseller_title">
        <p className="bestseller_title_text">Новинки</p>
      </div>
      <div className="render_container">
        {news.map((news) => {
          return (
            <div className="renderCard_container">
              {news.discount ? (
                <div className="renderCard_sale">
                  <p>50%</p>
                </div>
              ) : (
                ""
              )}
              <div className="bestseller_icon">
                <IconButton>
                  <Checkbox
                    {...label}
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
                <img src={news.img[0]} alt="" />
              </div>
              <div className="renderblock_info">
                <div className="renderblock_text">
                  <Link
                    to={`/card/${news.id}`}
                    className="renderblock_text_title"
                  >
                    {news.title}
                  </Link>
                  <p className="renderblock_text_sale">{news.sell} р</p>
                  <p className="renderblock_text_size">Размер: {news.size}</p>
                </div>
                <div className="renderblock_color">
                  {news.color
                    ? news.color.map((item) => (
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
          onClick={() => setLimitg(limitg + 4)}
        >
          Еще
        </button>
      </div>
    </section>
  );
};

export default RendCardNews;
