import React, { useState, useEffect } from "react";
import Heder from "../../components/heder/Heder";
import IntroductionOfMachines from "../../components/IntroductionOfMachines/IntroductionOfMachines";
import BestSellingProducts from "../../components/BestSellingProducts/BestSellingProducts";
import CompanyStatistics from "../../components/companyStatistics/CompanyStatistics";
import ListOfMachineParts from "../../components/ListOfMachineParts/ListOfMachineParts";
import Representation from "../../components/Representation/Representation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [islogin, setIsLogIn] = useState();
  const [isSignup, setIsSignup] = useState();

  useEffect(() => {
    setIsLogIn(localStorage.getItem("login"));
    setIsSignup(localStorage.getItem("signup"));

    if (islogin) {
      toast.success(" ورود با موفقیت انجام شد ");
      localStorage.removeItem("login");
      setIsLogIn("");
    }
    if (isSignup) {
      toast.success(" ثبت نام شما با موفقیت انجام شد ");
      localStorage.removeItem("signup");
      setIsSignup("");
    }
  });

  return (
    <>
      <ToastContainer containerId="containerA"/>
      <Heder />
      <IntroductionOfMachines />
      <ListOfMachineParts />
      <BestSellingProducts />
      <CompanyStatistics />
      <Representation />
    </>
  );
}
