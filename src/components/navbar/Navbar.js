import React, { useState, useRef, useEffect, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UpdateContOrders from "../../context/updateContOrders";

import "./Navbar.css";

import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { PiLineVertical } from "react-icons/pi";

export default function Navbar() {
  const [isSowListProduct, setIsSowListProduct] = useState(false);
  const [islogin, setIsLogin] = useState();

  const ordersCont = useContext(UpdateContOrders);

  const dropdown__nav_itemRef = useRef();
  const order3Ref = useRef();
  const nav_items = useRef();
  const navRef = useRef();
  const topbarRef = useRef();

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      navRef.current.style.backgroundColor = "var(--color-box)";
      topbarRef.current.style.backgroundColor = "var(--color-box)";
      topbarRef.current.style.color = "var(--color-text)";
      topbarRef.current.style.borderBottom = "solid var(--border-topbar) 1px";
      navRef.current.style.color = "var(--color-text)";
      navRef.current.style.boxShadow = " 0 1px 3px 0 rgba(0, 0, 0, 0.1)";
    } else {
      navRef.current.style.backgroundColor = "";
      topbarRef.current.style.backgroundColor = "";
      topbarRef.current.style.color = "";
      topbarRef.current.style.borderBottom = "solid white 1px";
      navRef.current.style.color = "rgb(255, 255, 255)";
      navRef.current.style.boxShadow = "";
    }
  });

  useEffect(() => {
    window.addEventListener("beforeunload", navigateToHome());
     function navigateToHome() {
      navigate("/");
       if (document.documentElement.scrollTop > 60) {        
        navRef.current.style.backgroundColor = "var(--color-box)";
      }
    }
    return () => {
      window.removeEventListener("beforeunload", navigateToHome);
    };
  }, []);

  let getIsLoginFromInfo = localStorage.getItem("Info")
    ? JSON.parse(localStorage.getItem("Info"))
    : false;
  useEffect(() => {
    setIsLogin(getIsLoginFromInfo.login);
  }, [getIsLoginFromInfo.login == true]);

  const isSowListProHandler = () => {
    if (!isSowListProduct) {
      dropdown__nav_itemRef.current.style.visibility = "visible";
      dropdown__nav_itemRef.current.style.opacity = "1";
      dropdown__nav_itemRef.current.style.transition =
        "all 0.3s ease-in 100ms !important";
      order3Ref.current.style.marginTop = "380px";
      setIsSowListProduct(true);
    } else {
      dropdown__nav_itemRef.current.style.visibility = "hidden";
      dropdown__nav_itemRef.current.style.transition =
        "all 0s ease-in !important";
      order3Ref.current.style.transition = "all 0.5s ease-in 40ms !important";
      dropdown__nav_itemRef.current.style.transition =
        "all 0s ease-in !important";
      setTimeout(() => {
        order3Ref.current.style.marginTop = "0px";
      }, 120);
      setIsSowListProduct(false);
    }
  };

  window.addEventListener("click", function (e) {
    if (document.querySelector(".Services").contains(e.target)) {
    } else {
      setTimeout(() => {
        order3Ref.current.style.marginTop = "0px";
      }, 200);
      dropdown__nav_itemRef.current.style.transition = "all 0s ease-in";

      dropdown__nav_itemRef.current.style.visibility = "hidden";
      setIsSowListProduct(false);
    }
  });

  function clickMenuHandler() {
    nav_items.current.style.right = "0";
  }
  function clickClosMenu() {
    nav_items.current.style.right = "-256px";
    setIsSowListProduct(false);
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    function scrollHandler() {
      if (document.documentElement.scrollTop > 60) {
        navRef.current.style.transition = "color 0s";
        topbarRef.current.style.backgroundColor = "var(--color-box)";
        navRef.current.style.position = "fixed";
        navRef.current.style.marginTop = "0";
        navRef.current.style.backgroundColor = "var(--color-box)";
        navRef.current.style.boxShadow = " 0 1px 3px 0 rgba(0, 0, 0, 0.1)";
        navRef.current.style.color = "var(--color-text)";
      } else {
        
        navRef.current.style.marginTop = "56px";
        navRef.current.style.position = "absolute";
        navRef.current.style.backgroundColor = "";
        topbarRef.current.style.backgroundColor = "";
        navRef.current.style.boxShadow = "";
        navRef.current.style.color = "rgb(255, 255, 255)";
        topbarRef.current.style.color = "rgb(255, 255, 255)";
      }
      if (location.pathname !== "/") {
        navRef.current.style.backgroundColor = "var(--color-box)";
        topbarRef.current.style.backgroundColor = "var(--color-box)";
        navRef.current.style.color = "var(--color-text)";
        topbarRef.current.style.color = "var(--color-text)";
        navRef.current.style.color = "var(--color-text)";
      }
    }
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });


  useEffect(() => {
    if (location.pathname == "/login" || location.pathname == "/Signup") {
      topbarRef.current.style.display = 'none'
      navRef.current.style.display = 'none'
    } else {
      topbarRef.current.style.display = 'flex'
      navRef.current.style.display = 'flex'

    }
  }, [location]);

  return (
    <>
      <div className="topbar" ref={topbarRef}>
        <div className="topbar-icons">
          <a className="topbar-icons__instagram">
            <FaInstagram />
          </a>
          <a className="topbar-icons__talegram">
            <FaTelegramPlane />
          </a>
          <a className="topbar-icons__youtube">
            <FaYoutube />
          </a>
          <a className="topbar-icons__twitter">
            <FaTwitter />
          </a>
        </div>
        <div className="topbar-ContactUs">
          <p className="topbar-ContactUs__number">
            123454679+ <FiPhone className="contactUs__icons" />
          </p>
          <PiLineVertical className="vertical_line" />
          <p className="topbar-ContactUs__email">
            YourEmailAriaparscompany{" "}
            <MdOutlineMail className="contactUs__icons" />
          </p>
        </div>
      </div>

      <div className="nav" ref={navRef}>
        <div className="nav-items" ref={nav_items}>
          <IoMdClose className="icon_closemenu" onClick={clickClosMenu} />
          <NavLink to="/" className={"nav-item"}>
            <div className="nav-item__link order1" onClick={clickClosMenu}>
              صفحه اصلی
            </div>
          </NavLink>
          <div className="nav-item nav-items__Services">
            <div
              className="nav-item__link Services order2"
              onClick={isSowListProHandler}
            >
              محصولات <IoIosArrowDown className="nav-items__Services__icon" />
            </div>
            <div ref={dropdown__nav_itemRef} className="dropdown__nav-item">
              <NavLink to="./products/Loader" className="navLink">
                <p onClick={clickClosMenu} value={"Loader"}>
                  قطعات لودر
                </p>
              </NavLink>
              <NavLink to="./products/Forklift" className={"navLink"}>
                <p onClick={clickClosMenu} value={"Forklift"}>
                  قطعات لیفتراک
                </p>
              </NavLink>
              <NavLink to="./products/Excavator" className={"navLink"}>
                <p onClick={clickClosMenu} value={"Excavator"}>
                  {" "}
                  قطعات بیل مکانیکی{" "}
                </p>
              </NavLink>
              <NavLink to="./products/MiniLoader" className={"navLink"}>
                <p onClick={clickClosMenu} value={"MiniLoader"}>
                  {" "}
                  قطعات مینی لودر{" "}
                </p>
              </NavLink>
              <NavLink to="./products/BillBackhoe" className={"navLink"}>
                <p onClick={clickClosMenu} value={"BillBackhoe"}>
                  {" "}
                  قطعات بیل بکهو{" "}
                </p>
              </NavLink>
              <NavLink to="./products/Grader" className={"navLink"}>
                <p onClick={clickClosMenu} value={"Grader"}>
                  {" "}
                  قطعات گریدر{" "}
                </p>
              </NavLink>
              <NavLink to="./products/DumpTruck" className={"navLink"}>
                <p onClick={clickClosMenu} value={"DumpTruck"}>
                  {" "}
                  قطعات دامپتراک{" "}
                </p>
              </NavLink>
              <NavLink to="./products/Roller" className={"navLink"}>
                <p onClick={clickClosMenu} value={"Roller"}>
                  {" "}
                  قطعات غلطک
                </p>
              </NavLink>
            </div>
          </div>

          <NavLink to="./about-us" ref={order3Ref} className="nav-item order3">
            <div className="order3" onClick={clickClosMenu}>
              <p>درباره ما</p>
            </div>
          </NavLink>
          <NavLink to="/contact" className="nav-item order4">
            <div className="order4" onClick={clickClosMenu}>
              <p>ارتباط باما</p>
            </div>
          </NavLink>
          <NavLink to="/orders" className="nav-item order5">
            <div className="nav-item__link order5" onClick={clickClosMenu}>
              سفارشات{" "}
            </div>
            <span className="numberContTheOrdersElement">
              {ordersCont.cont > 0 && ordersCont.cont}
            </span>
          </NavLink>
        </div>

        <IoIosMenu className="nav-Menu" onClick={clickMenuHandler} />
        <div className="nav-account">
          {islogin ? (
            <NavLink to={"/myaccount"} className={"navLink"}>
              <p className="nav-account__MyAccount"> حساب کاربری </p>{" "}
            </NavLink>
          ) : (
            <NavLink to={"/login"} className={"navLink"}>
              <div className="login">
                <p className="login__text">
                  ورود <PiLineVertical className="vertical_line" /> ثبت نام
                </p>
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}
