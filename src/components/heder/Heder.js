import React from "react";
import "./Heder.css";
import { VscDash } from "react-icons/vsc";

export default function Heder() {
  return (
    <>
      <div className="heder">
        <div className="img-heder"></div>
        <div className="heder-title">
          <h5 className="heder-title__brandName">
            <span className="heder-title__brandName__span">شرکت</span>{" "}
            <span className="heder-title__brandName__span">آریا</span>{" "}
            <span className="heder-title__brandName__span">پارس</span>{" "}
            <span className="heder-title__brandName__span">جنوب</span>{" "}
          </h5>
          <p className="heder-title__text">
            <VscDash className="heder-title__text__icon" /> سیزده سال سابقه در
            زمینه ساخت قطعات ماشین آلات سنگین و نیمه سنگین.
            <br />
            <VscDash className="heder-title__text__icon" /> تأمین بخش بزرگی از
            نیاز کشور از هر نوع قطعه ای.
            <br />
            <VscDash className="heder-title__text__icon" /> تعمیرات تخصصی و
            سرویس در جنوب کشور توسط مکانیک های ماهر.
            <br />
            <VscDash className="heder-title__text__icon" /> کامل ترین مجموعه
            قطعات راهسازی و معدنی در جنوب و سایر نقاط کشور.
            <br />
            <VscDash className="heder-title__text__icon" /> دارای گارانتی و
            خدمات پس از فروش برای تمامی قطعات.
            <br />
          </p>
        </div>
        <section id="section_arrowDown" className="demo">
          <a>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </section>
      </div>
    </>
  );
}
