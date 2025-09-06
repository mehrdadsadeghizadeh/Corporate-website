import React from "react";
import "./IntroductionOfMachines.css";

import MachineryInformationBox from "./MachineryInformationBox";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"

export default function IntroductionOfMachines() {
  return (
    <>
      <div className="container-IntroductionOfMachines">

        <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
          <div className="parent__title">
          <p className="titl-brand">
            {" "}
            شرکت آریا پارس جنوب تامین قطعات بولدوزر، لودر و ماشین های سنگین
          </p></div>
        </ScrollAnimation>
      
        <ScrollAnimation animateIn='bounceInRight'
         animateOut='bounceOutLeft'
         animateOnce={true}
         > 

        <div className="container-box__IntroductionOfMachines">
            
          <MachineryInformationBox
            img={"/images/imagesIntroductionOfMachines/excavator-3.png"}
            title={"قطعات بیل مکانیکی"}
            text={
              "بیل مکانیکی از جمله دستگاه های سنگین و کاربردی مهندسی و عمرانی به شمار می رود که دارای قطعات بیل مکانیکی نظیر باکت و کابین گردان و یک بازوی مفصلی دکل و استیک در قسمت بالا…"
            }
          />
          <MachineryInformationBox
            img={"/images/imagesIntroductionOfMachines/grader.png"}
            title={"قطعات گریدر"}
            text={
              "گریدر یا شیب ساز از جمله ماشین آلات راهسازی سنگین مهندسی میباشد.گریدر مهمترین دستگاه برای عملیاتخاکبرداری ورساندن خاک به سطح مورد نظر و تنظیم شیب و تسطیح خاکریز ها میباشد."
            }
          />
          <MachineryInformationBox
            img={"/images/imagesIntroductionOfMachines/heavy-vehicle-2.png"}
            title={" قطعات لودر"}
            text={
              "لودر یکی از کارآمد ترین دستگاه در عملیات عمرانی و ساختمانی و معدنی میباشد.به دلیل فیزیک خواصی که این دستگاه دارد بسیاری از کارها را انجام میدهد که عبارت اند از جا به جایی خاک, ایجاد خاکریزها…"
            }
          />
          <MachineryInformationBox
            img={"/images/imagesIntroductionOfMachines/excavator-4.png"}
            title={"قطعات بلدوزر"}
            text={
              "بلدوزر یکی از چندین مدل ماشین آلات راه سازی می باشد که استفاده های بسیاری در زمینه هایی غیر از راه سازی نیز دارد و همین امر موجب شده است به یکی از پر طرفدار ترین خودرو های سنگین وزن در جهان تبدیل شود."
            }
          />
        </div></ScrollAnimation>
      </div>
    </>
  );
}
