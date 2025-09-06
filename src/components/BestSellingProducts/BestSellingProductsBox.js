import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export default function BestSellingProductsBox({ img, name, url }) {
  return (
    <div className="BestSellingProducts__box">
      <div className="BestSellingProducts__box__img">
        <img src={img} />
      </div>
      <p className="BestSellingProducts__box__nameProduct">{name}</p>
      <div className="BestSellingProducts__box__btn">
        <Link to={url}>
          <button>
            <FaEye className="BestSellingProducts__box__btn__icon" />
            نمایش محصول
          </button>
        </Link>
      </div>
    </div>
  );
}
