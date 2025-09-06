import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

// doc alert =>  https://deadsimplechat.com/blog/react-toastify-the-complete-guide/
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

export default function Login() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState([]);
  const [repeatPassword, setRepeatPassword] = useState([]);
  const [passwordExisting, setPasswordExisting] = useState([]);
  const [emailExisting, setEmailExisting] = useState([]);

  const navigate = useNavigate()

  function getValueName(e) {
    setName(e.target.value);
  }
  function getValueEmail(e) {
    setEmail(e.target.value);
  }
  function getValuePassword(e) {
    setPassword(e.target.value);
  }
  function getValueRepeatPassword(e) {
    setRepeatPassword(e.target.value);
  }
  function getValuePasswordExisting(e) {
    setPasswordExisting(e.target.value);
  }
  function getValueEmailExisting(e) {
    setEmailExisting(e.target.value);
  }

  async function isValidFormRegistration() {
    const Registration = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
      repeatPassword: yup.string().min(8).required(),
    });
    let dataRegistration = {
      name,
      email,
      password,
      repeatPassword,
    };

    const isValid = await Registration.isValid(dataRegistration);

    const Info = {
      name,
      email,
      password,
      login: true,
    };

    const getEmailFromInfo = JSON.parse(localStorage.getItem("Info"))
      ? JSON.parse(localStorage.getItem("Info")).email
      : "";

    if (isValid && password == repeatPassword && email !== getEmailFromInfo) {
      localStorage.setItem("Info", JSON.stringify(Info));
      localStorage.setItem("signup", JSON.stringify("signup"));
      navigate("/");
    } else if (email == getEmailFromInfo) {
      toast.warning(" کاربر از قبل ثبت نام شده است! ");
    } else {
      toast.error(" لطفا فیلد های لازم را با دقت پر کنید ");
    }
  }

  function isValidFormLogin() {
    const getInfo = JSON.parse(localStorage.getItem("Info"));
    if (getInfo) {
      if (!emailExisting.length && !passwordExisting.length) {
        toast.error(" لطفا فیلد های لازم را پر کنید ");
      } else if (!emailExisting.length) {
        toast.error(" ایمیل را وارد نکرده اید ! ");
      } else if (!passwordExisting.length) {
        toast.error(" پسورد را وارد نکرده اید! ");
      } else if (emailExisting.length && emailExisting !== getInfo.email) {
        toast.error(" ایمیل یافت نشد! ");
      } else if (
        passwordExisting.length &&
        passwordExisting !== getInfo.password
      ) {
        toast.error("   پسورد ناردست است! ");
      } else {
        localStorage.setItem("login", JSON.stringify("login"));
        const updateInfo = JSON.parse(localStorage.getItem("Info"));
        updateInfo.login = true;
        localStorage.setItem("Info", JSON.stringify(updateInfo));
        navigate("/");
      }
    } else {
      toast.error(" کاربر یافت نشد ");
    }
  }

  return (
    <>
      <ToastContainer position="top-right" />

      <div className="container-login">
        <div className="login-page">
          <input type="checkbox" id="check" />
          <div className="login form">
            <header> حساب کاربری </header>
            <form action="#">
              <input
                type="text"
                placeholder=" ایمیل خود را وارد کنید "
                onChange={getValueEmailExisting}
              />
              <input
                type="password"
                placeholder=" پسورد خود را وارد کنید "
                onChange={getValuePasswordExisting}
              />
              <a href="#"> رمز ورود خود را فراموش کردید؟ </a>
              <button
                className="form-button"
                onClick={(e) => {
                  e.preventDefault();
                  isValidFormLogin();
                }}
              >
                {" "}
                ورود{" "}
              </button>
            </form>
            <div className="signup">
              <span className="signup">
                حساب کاربری ندارید ؟
                <label htmlFor="check"> ثبت نام کنید </label>
              </span>
            </div>
          </div>
          <div className="registration form">
            <header> ثبت نام </header>
            <form action="#">
              <input
                type="text"
                placeholder=" نام و نام خانوداگی  "
                onChange={getValueName}
              />
              <input
                type="text"
                placeholder=" ایمیل خود را وارد کنید "
                onChange={getValueEmail}
              />
              <input
                type="password"
                placeholder=" پسورد خود را وارد کنید "
                onChange={getValuePassword}
              />
              <p className="messagePassword">
                {" "}
                پسورد حداقل باید 8 کارکتر باشد !
              </p>
              <input
                type="password"
                style={{ marginTop: "10px" }}
                placeholder=" لطفا پسورد خود را دوباره وارد کنید"
                onChange={getValueRepeatPassword}
              />
              <button
                className="form-button"
                onClick={(e) => {
                  e.preventDefault();
                  isValidFormRegistration();
                }}
              >
                {" "}
                ایجاد حساب{" "}
              </button>
            </form>
            <div className="signup">
              <span className="signup">
                حساب کاربری دارید؟
                <label htmlFor="check"> وارد شوید </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
