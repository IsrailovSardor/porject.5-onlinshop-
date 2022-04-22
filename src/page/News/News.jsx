import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./News.css";
// COMPONENTS
import Scroll from "../../components/Scroll/Scroll";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";

const News = () => {
  // news
  const [news, setNews] = useState([]);
  const [curretpage, setCurrPage] = useState(1);
  const [fetching, setFetnch] = useState(true);
  useEffect(() => {
    if (fetching) {
      axios
        .get(`http://localhost:3000/newspost?_limit=6&_page=${curretpage}`)
        .then((response) => {
          setNews([...news, ...response.data]);
          setCurrPage((prevState) => prevState + 1);
        })
        .finally(() => setFetnch(false));
    }
  }, [fetching]);

  // plaginat
  useEffect(() => {
    document.addEventListener("scroll", scrollHandl);
    return function () {
      document.removeEventListener("scroll", scrollHandl);
    };
  });
  const scrollHandl = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      10
    ) {
      setFetnch(true);
    }
  };

  return (
    <div className="newspage_container">
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <p className="breadcrumb_links">Новости</p>
      </Breadcrumbs>
      <div className="newspage_block">
        <p className="newspage_block_tetsa">Новости</p>
        {news.map((news, index) => {
          return (
            <div className="newspage_card" key={index}>
              <img src={news.img} alt="" className="newspage_card_img" />
              <div>
                <p className="newspage_card_title">{news.title}</p>
                <p className="newspage_card_descr">{news.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
