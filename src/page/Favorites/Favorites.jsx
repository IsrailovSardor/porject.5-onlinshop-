import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Scroll from '../../components/Scroll/Scroll';
import { delCart} from "../../redux/actions/index";
import { Link } from 'react-router-dom';
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Favorites = () => {

    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    const handleClose = (item) => {
      dispatch(delCart(item));
    };

//   onClick={() => handleClosee(cartItem)}

  const cartItem = (cartItem) => {
    return (
        <div className="renderCard_container">
        {cartItem.discount ? (
          <div className="renderCard_sale">
            <p>{cartItem.discountSale}</p>
          </div>
        ) : (
          ""
        )}
        <div>
            <button onClick={() => handleClose(cartItem)}> УДАЛИТЬ</button>
        </div>
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
          <img src={cartItem.img[0]} alt="" />
        </div>
        <div className="renderblock_info">
          <div className="renderblock_text">
            <Link
              to={`/card/${cartItem.id}`}
              className="renderblock_text_title"
            >
              {cartItem.title}
            </Link>
            <p className="renderblock_text_sale">{cartItem.sell} р</p>
            <p className="renderblock_text_size">Размер: {cartItem.size}</p>
          </div>
          <div className="renderblock_color">
            {cartItem.color
              ? cartItem.color.map((item) => (
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
  };

  const emptyCart = () => {
    return <p className="trach_nune"> пуста</p>;
  };

    return (
        <div>
            <Scroll/>
            <section className="collection_section">
        <div className="collection_title">
          <p className="collection_title_text">Коллекция</p>
          <span className="cart-button_icon">{state.length}</span>
        </div>

        <div className="collection_title_btn">
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItem)}

        </div>
      </section>
        </div>
    );
};

export default Favorites;