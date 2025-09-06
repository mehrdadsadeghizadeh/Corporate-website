import React from "react";
import "./AboutUs.css"

export default function AboutUs() {
  return (
    <>
      <div className="container-aboutUs">
        <div className="aboutUs">
          <div className="aboutUs__text">
            <p>
              {" "}
              شرکت آریا پارس در زمینه ساخت قطعات ماشین آلات سنگین و نیمه سنگین ،
              با بیش از سیزده سال سابقه در این زمینه موفق به طعما بخش بزرگی از
              نیاز کشور شده است.{" "}
              برای دریافت مشاوره رایگان با ما در ارتباط باشید...
            </p>
          </div>
          <div className="aboutUs__img">
            <img src="./images/aboutus/Industrial-Parts-Base.jpg"  />
          </div>
        </div>
      </div>
    </>
  );
}
