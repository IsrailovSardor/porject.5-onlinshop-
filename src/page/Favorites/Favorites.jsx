import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// COMPONENTS
import Scroll from "../../components/Scroll/Scroll";
import Cart from "../../components/Cart/Cart";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
// REDUX
import { getFavorites, getProdcutBestLimit } from "../../redux/productact";
import CartNews from "../../components/Cart/CartNews";

const Favorites = () => {
  const dispatch = useDispatch();
  // favorites
  const favorites = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.favorites;
  });
  useEffect(() => {
    dispatch(getFavorites());
    console.log(favorites);
  }, []);
  // BESTSELLER
  const bestseller = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.bestsellerlimit;
  });
  const [limit] = useState(5);
  useEffect(() => {
    dispatch(getProdcutBestLimit(1, limit));
  }, [limit]);

  return (
    <div>
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <p className="breadcrumb_links">Избранное</p>
      </Breadcrumbs>
      <section className="collection_section">
        <div className="collection_title">
          <p className="collection_title_text">Избранное</p>
          <p className="collection_title_desrcs">
            Товаров в избранном: {favorites.length}
          </p>
        </div>
        <div className="colrender_container">
          {favorites.length ? (
            favorites.map((item) => (
              <Cart product={item.product} key={item.product.id} />
            ))
          ) : (
            <div>
              <p className="collection_title_text-error">
                У Вас пока нету избранных товаров
              </p>
              <p className="collection_title_text">Возможно Вас заинтересует</p>
              <section className="collection_section_newspostss">
                {bestseller.map((best) => (
                  <div className="mini_card">
                    <CartNews product={best} key={best.id} />
                  </div>
                ))}
              </section>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Favorites;
