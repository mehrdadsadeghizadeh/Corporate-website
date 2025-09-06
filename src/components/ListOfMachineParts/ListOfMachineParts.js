import React from "react";
import "./ListOfMachineParts.css";
import { MdFrontLoader } from "react-icons/md";
import ListOfMachinePartsBox from "./ListOfMachinePartsBox";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

export default function ListOfMachineParts() {
  return (
    <>
        <div className="container-ListOfMachineParts">
          <div className="ListOfMachineParts__imgisbackground"></div>
          <div className="ListOfMachineParts__title">
            <MdFrontLoader className="ListOfMachineParts__title__icon" />{" "}
            <p>لیست قطعات ماشین آلات راهسازی و معدنی</p>
          </div>

          <div className="ListOfMachineParts__boxs">
            <ScrollAnimation
              animateIn="flipInY"
              animateOut="flipOutY"
              className="ScrollAnimationLIst1"
            >
              <ListOfMachinePartsBox
                img={"/images/ListOfMachineParts/box-img/001-400x300.jpg"}
                name={"لوازم یدکی لودر"}
              />{" "}
            </ScrollAnimation>{" "}
            <ScrollAnimation
              animateIn="flipInY"
              animateOut="flipOutY"
              className="ScrollAnimationLIst2"
            >
              <ListOfMachinePartsBox
                img={"/images/ListOfMachineParts/box-img/003-400x300.jpg"}
                name={"لوازم یدکی لیفتراک"}
              />
            </ScrollAnimation>{" "}
            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
              <ListOfMachinePartsBox
                img={"/images/ListOfMachineParts/box-img/004-400x300.jpg"}
                name={"لوازم یدکی بیل مکانیکی "}
              />
            </ScrollAnimation>{" "}
            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
              <ListOfMachinePartsBox
                img={"/images/ListOfMachineParts/box-img/005-400x300.jpg"}
                name={"لوازم یدکی مینی لودر"}
              />
            </ScrollAnimation>{" "}
            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
              <ListOfMachinePartsBox
                img={"/images/ListOfMachineParts/box-img/Damtrak-machines.jpg"}
                name={"لوازم یدکی بیل بکهو"}
              />
            </ScrollAnimation>{" "}
            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
              <ListOfMachinePartsBox
                img={"/images/ListOfMachineParts/box-img/Forklift-machines.jpg"}
                name={"لوازم یدکی گریدر"}
              />
            </ScrollAnimation>{" "}
            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
              <ListOfMachinePartsBox
                img={"/images/ListOfMachineParts/box-img/Loader-machines.jpg"}
                name={"لوازم یدکی دامپتراک"}
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
              <ListOfMachinePartsBox
                img={
                  "/images/ListOfMachineParts/box-img/mini-loader--400x300.jpg"
                }
                name={"لوازم یدکی غلطک"}
              />
            </ScrollAnimation>
          </div>
        </div>
    </>
  );
}
