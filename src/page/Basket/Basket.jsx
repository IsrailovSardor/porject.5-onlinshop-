import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Basket.css";
//COMPONENTS
import CartTrash from "../../components/Cart/CartTrash";
import { ReactComponent as Clo } from "../../assets/icon/close.svg";
import Scroll from "../../components/Scroll/Scroll";
//MUI
import Dialog from "@mui/material/Dialog";
//REDUX
import { getTrash } from "../../redux/productact";
import { useDispatch, useSelector } from "react-redux";
import { btnSell, changeCountProduct, matemSell } from "../../utils/matematika";

const Basket = () => {
  // modal
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClosee = () => {
    setOpen(false);
  };
  // trash
  const dispatch = useDispatch();
  const trash = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.trash;
  });
  useEffect(() => {
    dispatch(getTrash());
  }, []);

   const totalSell = matemSell(trash)
  const totalBtn = changeCountProduct(trash)
  return (
    <div className="basket_container">
      <Scroll />
      <Dialog
        open={open}
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
            <input type="checkbox" name="" id="" className="input_chexbox" />
            <p className="inout_modl_true">
              Согласен с условиями <Link to="/public">публичной оферты</Link>
            </p>
          </div>
          <div className="inout_modl">
            <button className="inout_modl_btn">Заказать</button>
          </div>
        </form>
      </Dialog>
      <div className="basket_block">
        <div className="basket_block_ret">
          <div className="colrender_container">
            {trash.length ? (
              trash.map((item) => (
                <CartTrash product={item} key={item.product.id} />
              ))
            ) : (
              <div>
                <p className="collection_title_text">Корзина пуста</p>
              </div>
            )}
          </div>
        </div>
        <div className="inform_sall">
          <div className="inform_block_text">
            <p className="inform_block_text_p">Сумма заказа</p>
            <div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Количество линеек:</p>
                <p className="cartItem_price_bla">{trash.length}</p>
              </div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Количество товаров:</p>
                <p className="cartItem_price_bla">{trash.length}</p>
              </div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Стоимость:</p>
                <p className="cartItem_price_bla">{totalSell}</p>
              </div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Скидка:</p>
                <p className="cartItem_price_bla">{totalBtn}</p>
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
