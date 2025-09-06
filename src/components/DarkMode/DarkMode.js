import React, { useEffect, useRef, useState } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import "./DarkMode.css";
import { useLocation } from "react-router-dom";

export default function DarkMode() {
  const [theme, setTheme] = useState(false);

  const iconTheme = useRef();

  let location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      iconTheme.current.style.left = "14px";
    } else {
      iconTheme.current.style.left = "50px";
    }
  });

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const toggleTheme = () => {
    setTheme(!theme);
    if (theme) setDarkMode();
    else setLightMode();
  };

  const getThemeFromLocalStorege = localStorage.getItem("selectedTheme");
  useEffect(() => {
    if (getThemeFromLocalStorege === "light") {
      setLightMode();
      setTheme(true);
    }
  }, []);

  return (
    <>
      <div className="theme" onClick={toggleTheme} ref={iconTheme}>
        <div className="icons-theme">
          {!theme ? <TiWeatherSunny /> : <IoMoonOutline />}
        </div>
      </div>
    </>
  );
}
