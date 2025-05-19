import { createBrowserRouter } from "react-router-dom";
import { routes } from "@/const/routes";
import { App } from "@/App";
import { MainPage } from "@/pages/MainPage/MainPage";
import { ProductsPage } from "@/pages/ProductsPage/ProductsPage";
import { Configurator } from "@/pages/ProductsPage/components/Configurator/Configurator";
import { ProductsCardInfoPage } from "@/pages/ProductsCardInfoPage/ProductsCardInfoPage";
import { CartPage } from "@/pages/CartPage/CartPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: routes.products,
        Component: ProductsPage,
      },
      {
        path: routes.configurator,
        Component: Configurator,
      },
      {
        path: routes.productsCardInfo,
        Component: ProductsCardInfoPage,
      },
      {
        path: routes.cart,
        Component: CartPage,
      },
    ],
  },
]);
