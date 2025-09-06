import React, { useState , useEffect} from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/foter/Footer";
import routes from "./routes";
import UpdateContOrders from "./context/updateContOrders";
import DarkMode from "./components/DarkMode/DarkMode";

export default function App() {
  const router = useRoutes(routes);

  const [cont, setCont] = useState(0);
  const getContHandler = (ordersCont) => {
    setCont(ordersCont);
  };

  useEffect(()=>{
  let getOrdersContFromLocal = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : 0
  setCont(getOrdersContFromLocal.length)
  },[getContHandler])

  return (
    <>
      <UpdateContOrders.Provider value={{ cont, getContHandler }}>
        <DarkMode /> 
        <Navbar></Navbar> 
        {router}
        {window.location.pathname !== "/login" ? <Footer></Footer> : null}

      </UpdateContOrders.Provider>       

    </>
  );
}
