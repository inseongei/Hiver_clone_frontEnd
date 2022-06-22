// import Swiper core and required modules
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

const MainCard = () => {
  return (
    <Swiper
      className="swiper-container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}

      Navigation={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1.765}   
      navigation={
        ({ prevEl: ".swiper-button-prev" }, { nextEl: ".swiper-button-next" })
      }
      direction={"horizontal"}
      loopFillGroupWithBlank={true}
      loop={true}
      observer={true}
    >
      <div>
        <div className="wiper-slide">
          <SwiperSlide>
            <a href="/">
              <img
                src="https://image.brandi.me/home/banner/bannerImage_5_1655476794.jpg"
                alt="img"
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src="https://image.brandi.me/home/banner/bannerImage_1_1655191430.jpg"
                alt="img"
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src="https://image.brandi.me/home/banner/bannerImage_2_1655476794.png"
                alt="img"
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src="https://image.brandi.me/home/banner/bannerImage_4_1655476794.jpg"
                alt="img"
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src="https://image.brandi.me/home/banner/bannerImage_14_1655474822.jpg"
                alt="img"
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src="https://image.brandi.me/home/banner/bannerImage_0_1655476338.png"
                alt="img"
              ></img>
            </a>
          </SwiperSlide>
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

    </Swiper>
  );
};

export default MainCard;
