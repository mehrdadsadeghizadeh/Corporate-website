import React, { useState } from "react";
import "./Contact.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RiHomeOfficeLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");

  function sendMassageHandler() {
    let patternForValidateEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name.trim() || !email.trim() || !massage.trim()) {
      toast.error(' لطفا تمامی فیلد ها را پر کنید ')
    } else if (!email.match(patternForValidateEmail)) {
      toast.error(' لطفا یک ایمیل معتبر وارد کنید ')
    } else {
      setName("");
      setEmail("");
      setMassage("");
      toast.success(' پیغام شما ارسال شد ')
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="container-contact">
        <div className="contact">
          <div className="contact__info">
            <div className="contact__info__items__one">
              <div className="contact__info__item">
                <div className="contact__info__item__title">
                  <p>
                    <RiHomeOfficeLine className="contact__info__item__icons" />{" "}
                    دفتر مرکزی:{" "}
                  </p>
                </div>
                <p className="contact__info__item__number"> 6125439283+ </p>
              </div>
              <div className="contact__info__item">
                <div className="contact__info__item__title">
                  <p>
                    {" "}
                    <AiOutlineMail className="contact__info__item__icons" />{" "}
                    ایمیل:{" "}
                  </p>
                </div>
                <p className="contact__info__item__number"> 6125439283+ </p>
              </div>{" "}
              <div className="contact__info__item">
                <div className="contact__info__item__title">
                  <p>
                    {" "}
                    <FaPhone className="contact__info__item__icons" /> مدیریت:{" "}
                  </p>
                </div>
                <p className="contact__info__item__number"> 6125439283+ </p>
              </div>{" "}
            </div>
            <div className="contact__info__items__two">
              <div className="contact__info__item">
                <div className="contact__info__item__title">
                  <p>
                    {" "}
                    <FaPhone className="contact__info__item__icons" /> فروش:{" "}
                  </p>
                </div>
                <p className="contact__info__item__number"> 6125439283+ </p>
              </div>
              <div className="contact__info__item">
                <div className="contact__info__item__title">
                  <p>
                    {" "}
                    <FaPhone className="contact__info__item__icons" /> انبار :{" "}
                  </p>
                </div>
                <p className="contact__info__item__number"> 6125439283+ </p>
              </div>
              <div className="contact__info__item">
                <div className="contact__info__item__title">
                  <p>
                    {" "}
                    <FaPhone className="contact__info__item__icons" /> حسابداری
                    :{" "}
                  </p>
                </div>
                <p className="contact__info__item__number"> 6125439283+ </p>
              </div>
            </div>
          </div>
          <div className="contact__message">
            <div className="contact__message__input">
              <div className="message__input">
                <p> نام </p>
                <input
                  className="input__massage__name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="message__input">
                <p> ایمیل </p>
                <input
                  type="text"
                  className="input__massage__email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="input__massage__textArea">
              <p> پیغام </p>
              <textarea
                name="postContent"
                onChange={(e) => setMassage(e.target.value)}
                value={massage}
              />
              <button onClick={sendMassageHandler}> ارسال پیغام </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
