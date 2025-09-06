import React from "react";
import "./CompanyStatistics.css";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdCastForEducation } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { PiHandshakeBold } from "react-icons/pi";
import { RiSurveyLine } from "react-icons/ri";
import CompanyStatisticsBox from "./CompanyStatisticsBox";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

export default function CompanyStatistics() {

  return (
    <>
      <section className="container-CompanyStatistics">
        <p className="CompanyStatistics__title">
          آریا پارس روشنی بخش صنعت ایران
        </p>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="container__CompanyStatistics__boxes">
            <CompanyStatisticsBox
              icon={
                <HiOutlineSpeakerphone className="CompanyStatistics__box1__icon" />
              }
              name={"تبلیغات"}
              number={87}
              text={"تعداد نمایشگاه ها"}
            />
            <CompanyStatisticsBox
              icon={
                <MdCastForEducation className="CompanyStatistics__box1__icon" />
              }
              name={"آموزش"}
              number={241}
              text={"تجهزات و ماشین آلات"}
            />
            <CompanyStatisticsBox
              icon={<BiSupport className="CompanyStatistics__box1__icon" />}
              name={"پشتیبانی"}
              number={271}
              text={"تعداد قطعات"}
            />
            <CompanyStatisticsBox
              icon={
                <BsFileEarmarkRuled className="CompanyStatistics__box1__icon" />
              }
              name={"قوانین"}
              number={91}
              text={"تعداد آگهی استخدام"}
            />
            <CompanyStatisticsBox
              icon={
                <PiHandshakeBold className="CompanyStatistics__box1__icon" />
              }
              name={"همکاری با ما"}
              number={124}
              text={"تعداد اعضا"}
            />
            <CompanyStatisticsBox
              icon={<RiSurveyLine className="CompanyStatistics__box1__icon" />}
              name={"نظر سنجی"}
              number={129}
              text={"طرحهای تحقیقات"}
            />
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
}
