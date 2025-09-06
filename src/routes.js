import Home from "./pages/home/Home";
import Orders from "./pages/orders/Orders";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import MyAccount from "./pages/myAccount/MyAccount";
import Contact from "./pages/contact/Contact";
import AboutUs from "./pages/aboutUs/AboutUs";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/orders", element: <Orders /> },
  { path: "/products/:productName", element: <Products /> },
  { path: "/product/:productName/:id", element: <Product /> },
  { path: "/login", element: <Login /> },
  { path: "/myaccount", element: <MyAccount /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
