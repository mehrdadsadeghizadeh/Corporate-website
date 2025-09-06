import React from "react";
import Representationbox from "./Representationbox";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

import "./Representation.css";

export default function Representation() {
  return (
    <>
      <div className="container-representation">
        <div className="representation">
          <div className="representation__boxs">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
              <Representationbox
                img={"/images/representation/Frame-239.png"}
                city={" نمایندگی اصفحان "}
                phone1={"09127564382"}
                phone2={"09123248579"}
                address={"ایران اصفحان ، میدان امام "}
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
              <Representationbox
                img={"/images/representation/Frame-11156.png"}
                city={" نمایندگی تهران "}
                phone1={"09127564354"}
                phone2={"09123248586"}
                address={"ایران تهران ،  میدان آزادی "}
              />{" "}
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
              <Representationbox
                img={"/images/representation/Frame-11157.png"}
                city={" نمایندگی شیراز "}
                phone1={"09127564394"}
                phone2={"09123248545"}
                address={"ایران شیراز ،  تخت جمشید  "}
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
              <Representationbox
                img={"/images/representation/image_2024-03-29_022457989.png"}
                city={" نمایندگی مشهد "}
                phone1={"09127564390"}
                phone2={"09123248513"}
                address={"ایران مشهد ، حرم رضوی  "}
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
}
