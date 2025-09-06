import React, { useState, useEffect, useContext } from "react";
import UpdateContOrders from "../../context/updateContOrders";

import toast, { Toaster } from "react-hot-toast";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import "./Orders.css";

export default function Orders() {
  const updateContOrders = useContext(UpdateContOrders);

  const [listItem, setListItem] = useState("under review");
  const [orders, setOrders] = useState([]);
  const [statusOrders, setStatusOrders] = useState(1);

  const getOrdersFromLocalStoreg = localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [];
  useEffect(() => {
    const filterOrders = getOrdersFromLocalStoreg.filter(
      (order) => order.statusOrders == statusOrders
    );
    setOrders(filterOrders);
  }, [statusOrders]);

  function removeOrderHandler(orderIndex) {
    getOrdersFromLocalStoreg.splice(orderIndex, 1);
    localStorage.setItem("orders", JSON.stringify(getOrdersFromLocalStoreg));
    setOrders(getOrdersFromLocalStoreg);
    updateContOrders.getContHandler(getOrdersFromLocalStoreg.length);
    toast.success("سفارش  شما با موفقیت لغو شد");
  }

  

  return (
    <>
      <Toaster/>
      <div className="container-orders">
        <div className="wrapper-ordes">
          <div className="contauner-order__heder">
            <div className="order-heder">
              <span
                className={`${
                  listItem == "under review" ? "style-order_item" : ""
                }`}
                onClick={() => {
                  setListItem("under review");
                  setStatusOrders(1);
                }}
              >
                در حال برسی{" "}
              </span>{" "}
              <span
                className={`${
                  listItem == "confirmed" ? "style-order_item" : ""
                }`}
                onClick={() => {
                  setListItem("confirmed");
                  setStatusOrders(2);
                }}
              >
                {" "}
                تایید شده{" "}
              </span>{" "}
              <span
                className={`${listItem == "is sent" ? "style-order_item" : ""}`}
                onClick={() => {
                  setListItem("is sent");
                  setStatusOrders(3);
                }}
              >
                {" "}
                در حال ارسال{" "}
              </span>{" "}
              <span
                className={`${
                  listItem == "received" ? "style-order_item" : ""
                }`}
                onClick={() => {
                  setListItem("received");
                  setStatusOrders(4);
                }}
              >
                {" "}
                دریافت شده{" "}
              </span>
            </div>

            <div className="order-heder__sm">
              <label> نوع سفارش شما :</label>
              <select
                id="heder__sm__items"
                onChange={(e) => setStatusOrders(e.target.value)}
              >
                <option value="1"> در حال برسی </option>
                <option value="2"> تایید شده </option>
                <option value="3"> در حال ارسال </option>
                <option value="4"> دریافت شده </option>
              </select>
            </div>
          </div>
          <div className="showOrders">
            {orders.length ? (
              orders.map((order, index) => (
                <div className="showOrders__boxs" key={order.id}>
                  <div className="showOrders__box">
                    <div className="showOrders__box__img">
                      {" "}
                      <img src={order.img} className="imgOrderBox" />
                    </div>
                    <div className="showOrders__box__informationProduct">
                      <div className="showOrders__box__informationProduct__namepro">
                        <p>نام قطعه: </p> <p>کد محصول: </p> <p>دسته بندی: </p>{" "}
                      </div>
                      <div className="showOrders__box__informationProduct__vlauepro">
                        <p className="showOrders__box__name__product">
                          {" "}
                          {order.name}{" "}
                        </p>
                        <p> {order.id} </p>
                        <p> {order.grouping} </p>
                      </div>
                    </div>
                    <div className="showOrders__box__Description">
                      <p className="showOrders__box__informationProduct__namepro">
                        {" "}
                        توضیحات:
                      </p>
                      <p className="showOrders__box__Description__text">
                        برای بررسی کمک های عقب مورد استفاده میشود که بسیار مقاوم
                        در دماهای بالا و در شرایط بسار سخت است که برای نصب آن
                        نیاز به متخصص فول حرفه ایی است.
                      </p>
                    </div>
                    <div className="showOrders__box__btnconselOrder">
                      <button
                        onClick={() => {
                          removeOrderHandler(index);
                        }}
                      >
                        {" "}
                        لغو سفارش{" "}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="customIsNotAvailable">
                <div className="customIsNotAvailable__img">
                  <img src="/images/products/Thereisnoproduct/10856652-aucune-donnee-de-resultat-document-ou-fichier-introuvable-concept-illustration-design-plat-vecteur-eps10-element-graphique-moderne-pour-la-page-de-destination-l-interface-utilisateur.jpg" />
                  <p> در این قسمت هیچ گونه سفارشی نیست! </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
