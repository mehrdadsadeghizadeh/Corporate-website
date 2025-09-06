import React, { useState, useEffect } from "react";
import "./Products.css";
import { FaPhoneFlip } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import productsList from "../../ProductsList";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [getNameProductFromElm, setGetNameProductFromElm] = useState("");
  const [getNameProductFromInnerHmlt, setGetNameProductFromInnerHmlt] =
    useState("");

  if (getNameProductFromElm) {
    localStorage.setItem("productValue", JSON.stringify(getNameProductFromElm));
    setGetNameProductFromElm("");
  }

  const params = useParams();

  useEffect(() => {
    setProducts(productsList);

    if (params.productName == "Loader") {
      setGetNameProductFromInnerHmlt("لودر");
    } else if (params.productName == "Forklift") {
      setGetNameProductFromInnerHmlt("لیفتراک");
    } else if (params.productName == "Excavator") {
      setGetNameProductFromInnerHmlt("بیل مکانیکی");
    } else if (params.productName == "MiniLoader") {
      setGetNameProductFromInnerHmlt("مینی لودر");
    } else if (params.productName == "BillBackhoe") {
      setGetNameProductFromInnerHmlt("بیل بکهو");
    } else if (params.productName == "Grader") {
      setGetNameProductFromInnerHmlt("گریدر");
    } else if (params.productName == "DumpTruck") {
      setGetNameProductFromInnerHmlt("دامپتراک");
    } else if (params.productName == "Roller") {
      setGetNameProductFromInnerHmlt("غلطک");
    }
  });
  return (
    <>
      <div className="container-page-products">
        <div className="title__page">
          <p className="title__page__text">
            قطعات {getNameProductFromInnerHmlt}
          </p>
        </div>
        <div className="container-productsAndfilter">
          <div className="container__filter">
            <p className="title__filter__items"> دسته بندی ها </p>
            <div className="filter__items">
              <Link className="filter__items__link" to={"/products/Loader"}>
                <div
                  className={`filter__item ${
                    params.productName == "Loader" ? "selected_category" : ""
                  }`}
                >
                  <ImSearch className="filter__item__iconsearch" />
                  <p> قطعات لودر </p>
                  <span>
                    {" "}
                    <IoIosArrowBack className="filter__item__iconarrowback" />{" "}
                  </span>{" "}
                </div>
              </Link>
              <Link className="filter__items__link" to={"/products/Forklift"}>
                <div
                  className={`filter__item ${
                    params.productName == "Forklift" ? "selected_category" : ""
                  }`}
                >
                  <ImSearch className="filter__item__iconsearch" />
                  <p> قطعات لیفتراک </p>
                  <span>
                    {" "}
                    <IoIosArrowBack className="filter__item__iconarrowback" />{" "}
                  </span>{" "}
                </div>
              </Link>
              <Link className="filter__items__link" to={"/products/Excavator"}>
                <div
                  className={`filter__item ${
                    params.productName == "Excavator" ? "selected_category" : ""
                  }`}
                >
                  <ImSearch className="filter__item__iconsearch" />
                  <p> قطعات بیل مکانیکی </p>
                  <span>
                    {" "}
                    <IoIosArrowBack className="filter__item__iconarrowback" />{" "}
                  </span>{" "}
                </div>
              </Link>
              <Link className="filter__items__link" to={"/products/MiniLoader"}>
                <div
                  className={`filter__item ${
                    params.productName == "MiniLoader"
                      ? "selected_category"
                      : ""
                  }`}
                >
                  <ImSearch className="filter__item__iconsearch" />
                  <p> قطعات مینی لودر </p>
                  <span>
                    {" "}
                    <IoIosArrowBack className="filter__item__iconarrowback" />{" "}
                  </span>{" "}
                </div>
              </Link>
              <Link
                className="filter__items__link"
                to={"/products/BillBackhoe"}
              >
                <div
                  className={`filter__item ${
                    params.productName == "BillBackhoe"
                      ? "selected_category"
                      : ""
                  }`}
                >
                  <ImSearch className="filter__item__iconsearch" />
                  <p> قطعات بیل بکهو </p>
                  <span>
                    {" "}
                    <IoIosArrowBack className="filter__item__iconarrowback" />{" "}
                  </span>{" "}
                </div>
              </Link>
              <Link className="filter__items__link" to={"/products/Grader"}>
                <div
                  className={`filter__item ${
                    params.productName == "Grader" ? "selected_category" : ""
                  }`}
                >
                  <ImSearch className="filter__item__iconsearch" />
                  <p> قطعات گریدر </p>
                  <span>
                    {" "}
                    <IoIosArrowBack className="filter__item__iconarrowback" />{" "}
                  </span>{" "}
                </div>
              </Link>
              <Link className="filter__items__link" to={"/products/DumpTruck"}>
                <div
                  className={`filter__item ${
                    params.productName == "DumpTruck" ? "selected_category" : ""
                  }`}
                >
                  <ImSearch className="filter__item__iconsearch" />
                  <p> قطعات دامپتراک </p>
                  <span>
                    {" "}
                    <IoIosArrowBack className="filter__item__iconarrowback" />{" "}
                  </span>{" "}
                </div>
              </Link>
              <Link className="filter__items__link" to={"/products/Roller"}>
                <div
                  className={`filter__item ${
                    params.productName == "Roller" ? "selected_category" : ""
                  }`}
                >
                  <ImSearch className="filter__item__iconsearch" />
                  <p> قطعات غلطک </p>
                  <span>
                    {" "}
                    <IoIosArrowBack className="filter__item__iconarrowback" />{" "}
                  </span>{" "}
                </div>
              </Link>
            </div>
            <div className="filter__Counseling">
              <p className="filter__Counseling__title">مشاوره خرید</p>
              <div>
                <p className="filter__Counseling__text">
                  <FaPhoneFlip className="filter__Counseling__icons" /> تلفن:
                  3747736 - 021{" "}
                </p>
                <p className="filter__Counseling__text">
                  <FaPhoneFlip className="filter__Counseling__icons" /> تلفن:
                  3982736 - 021{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="container__products">
            <div className="products__boxs">
              {products
                .filter((pro) => pro.grouping == params.productName)
                .map((pro) => (
                  <div className="product__box" key={pro.id}>
                    <div className="product__box__img">
                      <img src={pro.img} />
                    </div>
                    <div className="product__box__name">{pro.name}</div>
                    <Link
                      className="filter__items__link"
                      to={`/product/${params.productName}/${pro.id}`}
                    >
                      <button className="product__box__btn"> مشاهده </button>
                    </Link>
                  </div>
                ))}
            </div>
            {products.filter((pro) => pro.grouping == params.productName)
              .length == 0 && (
              <div className="thereIsNoProduct">
                <img src="/images/products/Thereisnoproduct/10856652-aucune-donnee-de-resultat-document-ou-fichier-introuvable-concept-illustration-design-plat-vecteur-eps10-element-graphique-moderne-pour-la-page-de-destination-l-interface-utilisateur.jpg" />
                <p>اتمام موجودی قطعات {getNameProductFromInnerHmlt} ! </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
