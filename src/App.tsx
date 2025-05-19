import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage/MainPage.tsx";
import CookieBanner from "./components/cookie/Cookie.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { Header } from "./components/header/Header.tsx";
// import { ProductsPage } from "./pages/ProductsPage/ProductsPage.tsx";

export const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
