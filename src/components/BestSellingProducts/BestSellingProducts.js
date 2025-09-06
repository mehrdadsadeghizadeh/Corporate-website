import React from "react";
import "./BestSellingProducts.css";
import { IoMdAppstore } from "react-icons/io";
import BestSellingProductsBox from "./BestSellingProductsBox";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BestSellingProducts() {
  return (
    <>
      <ScrollAnimation
        animateIn="bounceInRight"
        animateOut="bounceOutLeft"
        animateOnce={true}
      >
        <div className="container-BestSellingProducts">
          <p className="BestSellingProducts-title">
            <IoMdAppstore className="BestSellingProducts-title__icon" />
            محصولات پر فروش
          </p>
          <div className="container-BestSellingProducts__box">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                },
                490: {
                  slidesPerView: 3,
                },
                300: {
                  centeredSlides: true,
                  slidesPerView: 2,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <BestSellingProductsBox
                  name="سوزن پمپ لودر"
                  img={"/images/products/Loader/6101985-Copy-400x400.jpg"}
                  url="product/Loader/100L9"
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <BestSellingProductsBox
                  name={"چهارده سانتی غلطک"}
                  img={"/images/products/Roller/6101766-Copy-400x400.jpg"}
                  url="product/Roller/100R20"
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <BestSellingProductsBox
                  name="نازل سوزن انژرکتور "
                  img={"/images/products/Roller/6101947-Copy-400x400.jpg"}
                  url="product/Loader/100R22"
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <BestSellingProductsBox
                  name="کوپلینگ غلطک"
                  img={"/images/products/Roller/6101795-Copy-400x400.jpg"}
                  url="product/Loader/100R21"
                />
              </SwiperSlide>
              <SwiperSlide>
                <BestSellingProductsBox
                  name="سوپاپ لودر"
                  img={"/images/products/Loader/6101979-Copy-400x400.jpg"}
                  url="product/Grader/100L8"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}
