import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TbLogout2 } from "react-icons/tb";

import "./MyAccount.css";


export default function MyAccount() {

  const userInfo = JSON.parse(localStorage.getItem("Info"));
  const userOrders = JSON.parse(localStorage.getItem("orders"))
    ? JSON.parse(localStorage.getItem("orders"))
    : [];

  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);
  const [phone, setPhone] = useState(userInfo.phone ? userInfo.phone : "");
  const [nationalCode, setNationalCode] = useState(
    userInfo.nationalCode ? userInfo.nationalCode : ""
  );
  const [address, setAddress] = useState(
    userInfo.address ? userInfo.address : ""
  );

  const saveNewInfoUser = () => {
    let patternForValidateEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let patternForValidatePhone =
      "^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$";
    if (!name.trim()) {
      toast.error("نام و یا نام خانوداگی خود را وارد نکرده اید!");
    } else if (!email.match(patternForValidateEmail)) {
      toast.error(" لطفا یک ایمیل معتبر وارد کنید ");
    } else if (password.length < 8) {
      toast.error(" پسورد نمیتواند کمتر از 8 کارکتر باشد ");
    } else if (!phone.match(patternForValidatePhone)) {
      toast.error(" شماره موبایل معتبر نمیباشد! ");
    } else if (nationalCode.length !== 10) {
      toast.error("  کد ملی معتبر نمیباشد! ");
    } else if (address.length < 3) {
      toast.error(" لطفا یک آدرس معتبر وارد کنید ");
    } else {
      const Info = {
        name,
        email,
        password,
        phone,
        nationalCode,
        address,
      };
      localStorage.setItem("Info", JSON.stringify(Info));
      toast.success(" اطلاعات با موفقیت ثبت شدند. ");
    }
  };

  const navigate = useNavigate();
  const logoutHandler = () => {
    const userInfo = JSON.parse(localStorage.getItem("Info"));
    userInfo.login = false;
    localStorage.setItem("Info", JSON.stringify(userInfo));
    navigate("/");
  };

  return (
    <>
      <ToastContainer />
      <div className="container-MayAccont">
        <div className="MayAccont">
          <div className="userInfo">
            <div className="userInfo__item">
              <p> نام و نام خانوداگی :</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="userInfo__item">
              <p> ایمیل: </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="userInfo__item">
              <p> رمز عبور: </p>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="userInfo__item">
              <p> شماره موبایل: </p>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="userInfo__item">
              <p> کد ملی: </p>
              <input
                type="text"
                value={nationalCode}
                onChange={(e) => setNationalCode(e.target.value)}
              />
            </div>
            <div className="userInfo__item">
              <p> آدرس محل سکونت: </p>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="saveInfoBtn">
            <button onClick={saveNewInfoUser}> ذخیره اطلاعات </button>
          </div>
          <div className="MayAccont__footer">
            <div className="MayAccont__orders">
              <p className="MayAccont__orders__text"> تعداد سفارشات: </p>
              {userOrders.length && (
                <>
                  <p >
                    { userOrders.length } 
                  </p>
                  <Link to={"/orders"}>
                    <button> مشاهده </button>
                  </Link>
                </>
              )}
            </div>
            <div className="logOut" onClick={logoutHandler}>
              <TbLogout2 className="logOut__icon" />
              <p> خروج از حساب کاربری </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
