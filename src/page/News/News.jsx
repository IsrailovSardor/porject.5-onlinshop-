import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Scroll from "../../components/Scroll/Scroll";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import './News.css'

const fetchDataNews = () => {
  return axios
    .get(`http://localhost:3000/newspost`)
    .then((response) => response.data);
};

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchDataNews().then((data) => setNews(data));
  }, []);
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
        {news.map((news) => {
          return (
            <div className="newspage_card">
              <img src={news.img} alt="" />
              <div>
                <p>{news.title}</p>
                <p>{news.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
