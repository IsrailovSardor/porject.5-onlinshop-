import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Right } from "../../assets/icon/right.svg";
import { useDispatch, useSelector } from "react-redux";
import { getProdcutColLim } from "../../redux/actions/productact";

const RenCarCol = () => {
  // COLLECTION
  const dispatch = useDispatch();
  const collection = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.collectionlimit;
  });
  const [limit, setLimit] = useState(4);
  useEffect(() => {
    dispatch(getProdcutColLim(limit));
  }, [limit]);

  return (
    <section className="bestseller_container">
      <div className="bestseller_title">
        <p className="bestseller_title_text">Коллекция</p>
      </div>
      <div className="render_container">
        {collection.map((coll) => {
          return (
            <div className="renderCardColl_container">
              <div className="rendColl_card_block">
                <img src={coll.img} alt="" className="rendColl_card_img" />
                <p className="rendColl_card_text">{coll.title}</p>
              </div>
              <div className="rendColl_card_form">
                <Link
                  className="rendColl_card_btn"
                  to={`/collectionId/${coll.id}`}
                >
                  Смотреть все
                  <Right className="rendColl_card_icon" />
                </Link>
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

export default RenCarCol;
