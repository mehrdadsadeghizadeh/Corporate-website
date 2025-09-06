import React from "react";
import { PiLineVertical } from "react-icons/pi";

export default function Representationbox({
  img,
  city,
  phone1,
  phone2,
  address,
}) {
  return (
    <>
      <div className="representation__box">
        <div className="representation__img">
          <img src={img} />
        </div>
        <div className="representation__title">
          <p> {city} </p>
        </div>
        <div className="representation__phone">
          <p> {phone1} </p>
          <PiLineVertical className="vertical_line" />
          <p> {phone2} </p>
        </div>
        <div className="representation__address">
          <p> {address} </p>
        </div>
        <div className="representation__btn">
          <button>اطلاعات بیشتر</button>
        </div>{" "}
      </div>
    </>
  );
}
