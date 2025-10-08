import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Page/Root/Root";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";

import CardContainer from "../Page/CardContainer/CardContainer";
import App from "../Page/App/App";
import AppDeatails from "../Page/AppDeatails/AppDeatails";
import Installaion from "../Page/Installaion/Installaion";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",

        Component: Home,
      },
      {
        path: "/app",
        Component: App,
      },
      {
        path: "/appdeatails/:id",
        loader: () => fetch("/twenty.json"),

        Component: AppDeatails,
      },
      {
        path: "/installation",
        loader: () => fetch("/twenty.json"),
        Component: Installaion,
      },
    ],
  },
]);
