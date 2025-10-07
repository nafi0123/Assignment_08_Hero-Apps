import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Page/Root/Root";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import { Suspense, use, useState } from "react";
import CardContainer from "../Page/CardContainer/CardContainer";
import App from "../Page/App/App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/eight.json"),
        Component: Home,
      },
      {
        path: "/app",
        loader: () => fetch("/twenty.json"),
        Component: App,
      },
    ],
  },
]);
