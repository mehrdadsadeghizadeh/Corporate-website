import React, { useState, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import productsList from "../../ProductsList";
import UpdateContOrders from "../../context/updateContOrders";

import "./Product.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product() {
  const [product, setProduct] = useState(productsList);
  let params = useParams();
  let hasParams = product.some((pro) => pro.id == params.id);
  let updateContOrders = useContext(UpdateContOrders);

  function createOrder(product) {
    const isLogin = JSON.parse(localStorage.getItem("Info"))
      ? JSON.parse(localStorage.getItem("Info")).login
      : false;
    if (isLogin) {
      let prevOrders = [];
      let order = [];
      let orderData = {
        id: product.id,
        name: product.name,
        img: product.img,
        grouping: product.grouping,
        statusOrders: 1,
      };
      order.push(orderData);
      const getAllOrders = localStorage.getItem("orders");

      if (getAllOrders) {
        prevOrders = JSON.parse(getAllOrders);
      }

      if (prevOrders.filter((pro) => pro.id == product.id).length) {
        toast.error(" این محصول قبلا به سفارشات شما اضافه شده است ");
      } else {
        prevOrders.push(...order);
        localStorage.setItem("orders", JSON.stringify(prevOrders));
        updateContOrders.getContHandler(prevOrders.length);
        setTimeout(() => {
          toast.success(" محصول به سفارشات شما اضافه شد ")
        }, 100);
      }
    } else {
      toast.error(" برای ثبت سفارش ابتدا وارد حساب کاربری خود شوید ");
    }
  }

  return (
    <>
      <ToastContainer position="top-right" />
      <div className="container-product">
        {!hasParams ? (
          <Navigate to="/products"></Navigate>
        ) : (
          product
            .filter((pro) => pro.id == params.id)
            .map((pro) => (
              <div key={pro.id}>
                <header className="product__header"> {pro.name} </header>
                <div className="productDisplay">
                  <div className="productDisplay__img">
                    <img src={pro.img} />
                  </div>
                  <div className="ProductDisplay__Information">
                    <p className="productDisplay__name">نام قطعه: {pro.name}</p>
                    {pro.grouping == "Loader" && (
                      <p className="productDisplay__grouping">
                        دسته بندی: قطعات لودر
                      </p>
                    )}
                    {pro.grouping == "Forklift" && (
                      <p className="productDisplay__grouping">
                        دسته بندی: قطعات لیفتراک
                      </p>
                    )}
                    {pro.grouping == "Excavator" && (
                      <p className="productDisplay__grouping">
                        دسته بندی: قطعات بیل مکانیکی
                      </p>
                    )}
                    {pro.grouping == "Mini Loader" && (
                      <p className="productDisplay__grouping">
                        دسته بندی: قطعات مینی لودر
                      </p>
                    )}
                    {pro.grouping == "Bill Backhoe" && (
                      <p className="productDisplay__grouping">
                        دسته بندی: قطعات بیل بکهو
                      </p>
                    )}
                    {pro.grouping == "Grader" && (
                      <p className="productDisplay__grouping">
                        دسته بندی: قطعات گریدر
                      </p>
                    )}
                    {pro.grouping == "Dump Truck" && (
                      <p className="productDisplay__grouping">
                        دسته بندی:قطعات دامپتراک
                      </p>
                    )}
                    {pro.grouping == "Roller" && (
                      <p className="productDisplay__grouping">
                        دسته بندی:قطعات غلطک
                      </p>
                    )}

                    <p className="productDisplay__id">کد قطعه: {pro.id} </p>
                    <p className="Description__Description">
                      پس از ثبت سفارش کارشناسان ما با شما در ارتباط خواهند بود
                    </p>
                    <button
                      className="Description__btnOrder"
                      onClick={() => createOrder(pro)}
                    >
                      {" "}
                      ثبت سفارش{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </>
  );
}
