import React from "react";
import Landingcounter from "./Landingcounter";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

function CompanyStatisticsBox({ icon, name, number, text }) {


  return (
    <div className="CompanyStatistics__boxes">
      <div className="CompanyStatistics__box1">
        <p>
          {" "}
          {icon} {name}{" "}
        </p>
      </div>

      <ScrollAnimation
        delay={500}
        animateIn="tada"
        initiallyVisible={true}
        animateOnce={true}
      >
        <div className="CompanyStatistics__box2">
        <Landingcounter cont={number} />
          <p className="CompanyStatistics__box2__text"> {text} </p>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default CompanyStatisticsBox;
