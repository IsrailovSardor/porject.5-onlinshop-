import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Right } from "../../assets/icon/right.svg";
const Counris = ({ countries }) => {
  return (
    <div className="colrender_container">
      {countries.map((countries, i) => (
        <div className="renderCardColl_container">
          <div className="rendColl_card_block">
            <img src={countries.img} alt="" className="rendColl_card_img" />
            <p className="rendColl_card_text">{countries.title}</p>
          </div>
          <div className="rendColl_card_form">
            <Link
              className="rendColl_card_btn"
              to={`/collectionId/${countries.id}`}
            >
              Смотреть все
              <Right className="rendColl_card_icon" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counris;
