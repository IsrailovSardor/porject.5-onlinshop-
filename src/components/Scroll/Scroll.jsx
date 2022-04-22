import React, { useState } from "react";
import axios from "axios";
import "./Scroll.css";
// COMPONENTS
import massen from "../../assets/icon/chat.svg";
import up from "../../assets/icon/up.svg";
import close from "../../assets/icon/close.svg";
import tel from "../../assets/icon/tel.svg";
import tell from "../../assets/icon/tell.svg";
import teleg from "../../assets/icon/telegram.svg";
import wat from "../../assets/icon/wa.svg";
import user from "../../assets/icon/user.svg";
import complite from "../../assets/icon/complite.svg";
// BOOTSTRAP
import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const [complitMode, setCompliteMode] = useState(false);
  // user
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const handleUpdateChat = async (e) => {
    e.preventDefault();
    await axios.post(" http://localhost:3000/chat", {
      userName: userName,
      number: number,
    });
    setNumber("");
    setUserName("");
    setCompliteMode(true);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {complitMode ? (
        <div className="modalmode_block">
          <div className="modalmode_title">
            <img src={complite} alt="" className="modalmode_block_img" />
            <p className="modalmode_block_text">Спасибо!</p>
            <p className="modalmode_block_descr">
              Ваша заявка была принята ожидайте, скоро Вам перезвонят
            </p>
          </div>
          <div className="modalmode_btn">
            <button onClick={props.onHide}>Продолжить покупки</button>
          </div>
        </div>
      ) : (
        <div className="modalChat_block">
          <img
            src={close}
            alt=""
            className="modalChat_block_close"
            onClick={props.onHide}
          />
          <div className="modalChat_block_title">
            <p className="block_title_text">Если у Вас остались вопросы</p>
            <p className="block_title_descr">
              Оставьте заявку и мы обязательно Вам перезвоним
            </p>
          </div>
          <form className="modalChat_block_input" onSubmit={handleUpdateChat}>
            <div className="block_input_from">
              <img src={user} alt="" className="block_input_img" />
              <input
                type="text"
                placeholder="Как к Вам обращаться?"
                className="block_input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="block_input_from">
              <img src={tell} alt="" className="block_input_img" />
              <input
                type="text"
                pattern="[0-9]*"
                placeholder="Номер телефона"
                className="block_input"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <button className="block_input_btn" type="submit">
              Заказать звонок
            </button>
          </form>
        </div>
      )}
    </Modal>
  );
}

const Scroll = () => {
  const [chatMode, setChatMode] = useState(true);
  const chatShow = () => {
    setChatMode(false);
  };
  const chatHide = () => {
    setChatMode(true);
  };

  const upScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="chat_container">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <img src={up} alt="" className="chat_container_up" onClick={upScroll} />

      {chatMode ? (
        <img
          src={massen}
          alt="shat"
          className="chat_container_chat"
          onClick={chatShow}
        />
      ) : (
        <div className="chat_close">
          <img src={teleg} alt="" className="chat_link_teleg" />
          <img src={wat} alt="" className="chat_link_wat" />
          <img
            src={tel}
            alt=""
            className="chat_link_tel"
            onClick={() => setModalShow(true)}
          />
          <img
            src={close}
            alt=""
            className="chat_link_close"
            onClick={chatHide}
          />
        </div>
      )}
    </div>
  );
};

export default Scroll;
