import React from "react";
import CarouselBoot from "../../components/Carousel/CarouselBoot";
import money from "../../assets/img/money.png";
import group from "../../assets/img/group.png";
import shop from "../../assets/img/shop.png";
import truck from "../../assets/img/truck.png";
import "./Header.css";
import massen from "../../assets/icon/chat.svg";
import up from "../../assets/icon/up.svg";
import close from "../../assets/icon/close.svg";
import tel from "../../assets/icon/tel.svg";
import teleg from "../../assets/icon/telegram.svg";
import wat from "../../assets/icon/wa.svg";
import Scroll from "../../components/Scroll/Scroll";
import RenCarBes from "../../components/RenderCard/RenCarBes";
import RendCardNews from "../../components/RenderCard/RendCardNews";
import RenCarCol from "../../components/RenderCard/RenCarCol";

const Header = () => {
  return (
    <div className="home_container">
      <Scroll />
      <CarouselBoot />
      <RenCarBes />
      <RendCardNews />
      <RenCarCol/>
      <div className="about_container">
        <div className="about_block">
          <div className="about_block_img">
            <img src={money} alt="" className="about_img" />
          </div>
          <div className="about_block_text">
            <p className="about_title">Удобные способы оплаты</p>
            <p className="about_descr">
              Мы предлагаем возможность безналичной оплаты
            </p>
          </div>
        </div>
        <div className="about_block">
          <div className="about_block_img">
            <img src={truck} alt="" className="about_img" />
          </div>
          <div className="about_block_text">
            <p className="about_title">Cвоевремнная доставка</p>
            <p className="about_descr">
              100% гарантия возврата товара - 14 дней на возврат, без скандалов
              и истерик.
            </p>
          </div>
        </div>
        <div className="about_block">
          <div className="about_block_img">
            <img src={group} alt="" className="about_img" />
          </div>
          <div className="about_block_text">
            <p className="about_title">Профессиональная консультация</p>
            <p className="about_descr">
              Мы проконсультируем и индивидуально подойдем к Вашему заказу{" "}
            </p>
          </div>
        </div>
        <div className="about_block">
          <div className="about_block_img">
            <img src={shop} alt="" className="about_img" />
          </div>
          <div className="about_block_text">
            <p className="about_title">Акции и бонусы для покупателей</p>
            <p className="about_descr">
              Промокоды со скидками для постоянных клиентов, акции на новые
              позиции
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
