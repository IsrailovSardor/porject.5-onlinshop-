import React from "react";
import Scroll from "../../components/Scroll/Scroll";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delCart } from "../../redux/actions/index";
import "./Basket.css";
import { ReactComponent as Pls } from "../../assets/icon/pls.svg";
import { ReactComponent as Min } from "../../assets/icon/min.svg";
import { ReactComponent as Clo } from "../../assets/icon/close.svg";
import Dialog from "@mui/material/Dialog";


const Basket = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClosee = () => {
    setOpen(false);
  };

  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const cartItem = (cartItem) => {
    return (
      <div className="cartItem_block">
        <button
          className="cartItem_block_close"
          onClick={() => handleClose(cartItem)}
        >
          <Clo className="cartItem_block_close_svg" />
        </button>
        <div className="cartItem_block_img">
          <img src={cartItem.img[0]} alt="" />
        </div>
        <div className="cartItem_block_info">
          <div className="cartItem_title1">
            <p className="cartItem_title_text">{cartItem.title}</p>
          </div>
          <div className="cartItem_title2">
            <p className="cartItem_title_size">Размер: {cartItem.size}</p>
            <p className="cartItem_title_size">Цвет : </p>
            <div className="cartItem_title2_flex">
              <p className="cartItem_title2_sale1">{cartItem.sell} р</p>
              <p className="cartItem_title2_sale2">{cartItem.sellNews} р</p>
            </div>
          </div>
          <div className="cartItem_btm">
            <button className="cartItem_btm_min">
              <Min className="cartItem_btm_min_svg" />
            </button>
            <p className="cartItem_btm_leng">1</p>
            <button className="cartItem_btm_min">
              <Pls className="cartItem_btm_min_svg" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return <p className="trach_nune">Корзина пуста</p>;
  };
  return (
    <div className="basket_container">
      <Scroll />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form className="modl_trash">
           <div className="header_modl">
          <p className="header_modl_title">Оформление заказа</p>
          <button className="header_modl_btn_t" onClick={handleClosee}>
            <Clo className="cartItem_block_close_svg" />
          </button>
        </div>
        <div className="inout_modl">
          <p className="header_modl_desct">Ваше имя</p>
          <input
            type="text"
            placeholder="Например Иван"
            className="header_modl_input"
          />
        </div>
        <div className="inout_modl">
          <p className="header_modl_desct">Ваше фамилия</p>
          <input
            type="text"
            placeholder="Например Иванов"
            className="header_modl_input"
          />
        </div>
        <div className="inout_modl">
          <p className="header_modl_desct">Электронная почта</p>
          <input
            type="text"
            placeholder="example@mail.com"
            className="header_modl_input"
          />
        </div>
        <div className="inout_modl">
          <p className="header_modl_desct">Ваш номер телефона</p>
          <input
            type="text"
            placeholder="Введите номер телефона"
            className="header_modl_input"
          />
        </div>
        <div className="inout_modl">
          <p className="header_modl_desct">Страна</p>
          <input
            type="text"
            placeholder="Введите страну"
            className="header_modl_input"
          />
        </div>
        <div className="inout_modl">
          <p className="header_modl_desct">Город</p>
          <input
            type="text"
            placeholder="Введите город"
            className="header_modl_input"
          />
        </div>
        <div className="inout_modl_Chex">
          <input type="checkbox" name="" id="" className="input_chexbox"/>
          <p className="inout_modl_true">Согласен с условиями <Link to="/public">публичной оферты</Link></p>
        </div>
        <div className="inout_modl">
          <button className="inout_modl_btn">Заказать</button>
        </div>
        </form>
      </Dialog>
      <div className="basket_block">
        <div className="basket_block_ret">
          {state.length === 0 && emptyCart()}
          {state.length !== 0 && state.map(cartItem)}
        </div>
        <div className="inform_sall">
          <div className="inform_block_text">
            <p className="inform_block_text_p">Сумма заказа</p>
            <div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Количество линеек:</p>
                <p className="cartItem_price_bla">4 шт</p>
              </div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Количество товаров:</p>
                <p className="cartItem_price_bla">20 шт</p>
              </div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Стоимость:</p>
                <p className="cartItem_price_bla">6585 рублей</p>
              </div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Скидка:</p>
                <p className="cartItem_price_bla">125 рублей</p>
              </div>
            </div>
          </div>
          <div className="cartItem_price_line">{/*LINE*/}</div>
          <div className="cartItem_price">
            <p className="cartItem_price_opa">Итого к оплате:</p>
            <p className="cartItem_price_bla">6700 рублей</p>
          </div>
          <div className="cartItem_price_btn">
            <button className="cartItem_price_btn" onClick={handleClickOpen}>
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
