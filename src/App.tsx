import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage/MainPage.tsx";
// import { ProductsPage } from "./pages/ProductsPage/ProductsPage.tsx";

export const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
