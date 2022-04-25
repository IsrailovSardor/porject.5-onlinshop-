import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Basket.css";
//COMPONENTS
import CartTrash from "../../components/Cart/CartTrash";
import { ReactComponent as Clo } from "../../assets/icon/close.svg";
import Scroll from "../../components/Scroll/Scroll";
//MUI
import Dialog from "@mui/material/Dialog";
//REDUX
import { getProdcutNumber, getTrash } from "../../redux/productact";
import { useDispatch, useSelector } from "react-redux";
import { matemSell } from "../../utils/matematika";
import axios from "axios";
import PhoneInput from "react-phone-number-input";

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
  // BESTSELLER
  const numbers = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.number;
  });
  useEffect(() => {
    dispatch(getProdcutNumber());
  }, []);

  const totalSell = matemSell(trash);

  const [btnStatus, setBtnStatus] = useState(true);
  function handleChange(e) {
    const elements = document.getElementsByName("checkbox");
    let checkedCount = 0;
    elements.forEach((element) => {
      if (element.checked) {
        checkedCount++;
      }
    });
    if (checkedCount > 1 || checkedCount === 0) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  }

  const [number, setNumber] = useState();
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();

  const handleUpdateSale = async (e) => {
    e.preventDefault();
    await axios.post(" http://localhost:3000/sale", {
      lastName,
      number,
      firstName,
      email,
      country,
      city,
    });
    setNumber("");
    setLastName("");
    setFirstName("");
    setEmail("");
    setCountry("");
    setCity("");
  };
  const [modalSale, setModalSale] = useState(false);
  const handleHide = () => {
    setModalSale(true);
  };
  const handleShow = () => {
    setModalSale(false);
  };
  return (
    <div className="basket_container">
      <Scroll />
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form className="modl_trash" onSubmit={handleUpdateSale}>
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="inout_modl">
            <p className="header_modl_desct">Ваше фамилия</p>
            <input
              type="text"
              placeholder="Например Иванов"
              className="header_modl_input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="inout_modl">
            <p className="header_modl_desct">Электронная почта</p>
            <input
              type="email"
              placeholder="example@mail.com"
              className="header_modl_input"
              value={email}
              minLength={5}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inout_modl">
            <p className="header_modl_desct">Ваш номер телефона</p>
            <input
              type="text"
              pattern="[0-9]*"
              minLength={10}
              placeholder="Введите номер телефона"
              className="header_modl_input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="inout_modl">
            <p className="header_modl_desct">Страна</p>
            <input
              type="text"
              placeholder="Введите страну"
              className="header_modl_input"
              value={city}
              minLength={2}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="inout_modl">
            <p className="header_modl_desct">Город</p>
            <input
              type="text"
              placeholder="Введите город"
              className="header_modl_input"
              value={country}
              minLength={2}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="inout_modl_Chex">
            <input
              name="checkbox"
              type="checkbox"
              onChange={handleChange}
              className="input_chexbox"
            />
            <p className="inout_modl_true">
              Согласен с условиями <Link to="/public">публичной оферты</Link>
            </p>
          </div>
          <div className="inout_modl">
            <button
              className={btnStatus ? "inout_modl_btn" : "inout_modl_btns"}
              type="submit"
              disabled={btnStatus}
            >
              Заказать
            </button>
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
                <p className="cartItem_price_bla">{totalSell.totalQty}</p>
              </div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Количество товаров:</p>
                <p className="cartItem_price_bla">{totalSell.modelQty}</p>
              </div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Стоимость:</p>
                <p className="cartItem_price_bla">{totalSell.amount}</p>
              </div>
              <div className="cartItem_price">
                <p className="cartItem_price_opa">Скидка:</p>
                <p className="cartItem_price_bla">{totalSell.discontAmount}</p>
              </div>
            </div>
          </div>
          <div className="cartItem_price_line">{/*LINE*/}</div>
          <div className="cartItem_price">
            <p className="cartItem_price_opa">Итого к оплате:</p>
            <p className="cartItem_price_bla">{totalSell.totalSum}</p>
          </div>
          <div className="cartItem_price_btn">
            <button
              className="cartItem_price_btn"
              onClick={handleClickOpen}
              disabled={!trash.length}
            >
              Оформить заказ
            </button>
          </div>
        </div>
        <div className="mobile_sale">
          <div className="inform_block_text">
            {modalSale ? (
              <div>
                <p className="inform_block_text_p">Сумма заказа</p>
                <div className="cartItem_price">
                  <p className="cartItem_price_opa">Общее количество:</p>
                  <p className="cartItem_price_bla">
                    {totalSell.modelQty}({totalSell.totalQty})
                  </p>
                </div>
                <div className="cartItem_price">
                  <p className="cartItem_price_opa">Стоимость:</p>
                  <p className="cartItem_price_bla">{totalSell.amount}</p>
                </div>
                <div className="cartItem_price_line">{/*LINE*/}</div>
              </div>
            ) : null}
            <div className="cartItem_price">
              <p className="cartItem_price_opa">Итого к оплате:</p>
              <p className="cartItem_price_bla">{totalSell.totalSum}</p>
            </div>
            <div>
              {modalSale ? (
                <button onClick={handleShow} className="mobile_btn_hide">
                  Скрыть
                </button>
              ) : (
                <button onClick={handleHide} className="mobile_btn_hide">
                  Информация о заказе
                </button>
              )}
            </div>
          </div>
          <div className="cartItem_price_btn">
            <button
              className="cartItem_price_btn"
              onClick={handleClickOpen}
              disabled={!trash.length}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
