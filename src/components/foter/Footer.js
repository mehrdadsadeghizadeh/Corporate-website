import React, { useState } from "react";
import "./Footer.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaTruck } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { PiLineVertical } from "react-icons/pi";

export default function Footer() {
  const [inputValue, setInputValue] = useState('');



  const EmailIsValid = () => {
    let patternForValidateEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (inputValue.match(patternForValidateEmail)) {
     toast.success(" از بازخورد شما متشکریم ✌ ")
     setInputValue('')
    } else {
      toast.error(" یه ایمیل معتبر وارد کن 😒 ")
    }
  };

  return (
    <>
    <ToastContainer />
      <section className="footer">
        <div className="img-footer"></div>
        <div className="container-footer">
          <div className="footer__BenefitsOfBuyingFromUs">
            <div className="footer__BenefitsOfBuyingFromUs__box">
              <div className="footer__BenefitsOfBuyingFromUs__box__icon">
                <FaTruck className="footer-icon" />
              </div>
              <div className="footer__BenefitsOfBuyingFromUs__box__text">
                ارسال به سراسر کشور{" "}
              </div>
            </div>
            <div className="footer__BenefitsOfBuyingFromUs__box">
              <div className="footer__BenefitsOfBuyingFromUs__box__icon">
                <BsBoxSeamFill className="footer-icon" />{" "}
              </div>
              تحویل اکسپرس{" "}
            </div>
            <div className="footer__BenefitsOfBuyingFromUs__box__text"></div>{" "}
            <div className="footer__BenefitsOfBuyingFromUs__box">
              <div className="footer__BenefitsOfBuyingFromUs__box__icon">
                <FaPeopleCarryBox className="footer-icon" />{" "}
              </div>
              خرید بی واسطه{" "}
            </div>
            <div className="footer__BenefitsOfBuyingFromUs__box__text"></div>{" "}
            <div className="footer__BenefitsOfBuyingFromUs__box">
              <div className="footer__BenefitsOfBuyingFromUs__box__icon">
                <FaBoxOpen className="footer-icon" />{" "}
              </div>
              48 ساعت بازگشت کالا{" "}
            </div>
            <div className="footer__BenefitsOfBuyingFromUs__box__text"></div>{" "}
            <div className="footer__BenefitsOfBuyingFromUs__box">
              <div className="footer__BenefitsOfBuyingFromUs__box__icon">
                <SiAdguard className="footer-icon" />{" "}
              </div>
              تضمین کیفیت{" "}
            </div>
            <div className="footer__BenefitsOfBuyingFromUs__box__text"></div>
          </div>
          <hr className="footer__hr" />
          <div className="mian__footer">
            <div className="mian__footer__text__PurchaseGuide">
              <p className="mian__footer__title">راهنمای خرید از آریا پارس</p>
              <ul className="mian__footer__list__items">
                <li>نحوه ثبت سفارش</li>
                <li>رویه ارسال سفارش</li>
                <li>شیوه‌های پرداخت</li>
              </ul>
            </div>
            <div className="mian__footer__text__Services">
              <p className="mian__footer__title">خدمات مشتریان</p>
              <ul className="mian__footer__list__items">
                <li className="mian__footer__list__items__item">
                  پاسخ به پرسش‌ها
                </li>
                <li className="mian__footer__list__items__item">
                  رویه‌های بازگرداندن کالا
                </li>
                <li className="mian__footer__list__items__item">
                  شرایط استفاده
                </li>
              </ul>
            </div>
            <div className="mian__footer__text__us">
              <p className="mian__footer__title"> با آریا پارس</p>
              <ul className="mian__footer__list__items">
                <li className="mian__footer__list__items__item">
                  {" "}
                  مطالب آموزشی{" "}
                </li>
                <li className="mian__footer__list__items__item">
                  {" "}
                  تماس با آریا پارس یدک
                </li>
                <li className="mian__footer__list__items__item">
                  درباره آریا پارس یدک
                </li>
              </ul>
            </div>
            <div className="mian__footer__text__Notices">
              <p>از تخفیف‌ها و جدیدترین‌ها باخبر شوید:</p>
              <p className="mian__footer__text__Notices__emailtext">
                آدرس ایمیل:
              </p>
              <input
                className="mian__footer__text__Notices__input"
                type="email"
                placeholder=" ... آدرس ایمیل شما "
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value) }
              />
              <div className="mian__footer__text__Notices__btn">
                <button onClick={EmailIsValid}>عضویت</button>
              </div>
            </div>
          </div>
          <div className="footer__ContactUs">
            <p className="footer__ContactUs__Address">
              <MdPlace className="footer__ContactUs__icon" />
              آدرس دفتر: خوزستان اتوبان کشاورز غربی, از جنوب به شمال بعد از
              دامپزشکی، ساختمان توکا 3، واحد 332{" "}
            </p>
            <p className="footer__ContactUs_phoneNumber">
              <FaPhone className="footer__ContactUs__icon" /> تلفن : 05321063
              - 67687516 - 66547059 - 62336529
            </p>
          </div>
        </div>
        <div className="footer__copy__right">
          <div className="footer__display">
            <div className="sl__copy__right"></div>
            <p className="copy__right__text">
              تمامی حقوق این سایت متعلق به شرکت آریا پارس است.{" "}
              <PiLineVertical className="footer__ContactUs__icon" /> طراح سایت:
              مهرداد صادقی زاده
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
