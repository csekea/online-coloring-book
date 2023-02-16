import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import MyImages from "./Pages/MyImages";
import ImageEditor from "./Pages/ImageEditor";
import ImageCreator from "./Pages/ImageCreator";
import reportWebVitals from './reportWebVitals';

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/my-images",
        element: <MyImages />
      },
      {
        path: "/image-creator/",
        element: <ImageCreator />
      },
      {
        path: "/image-editor/:id",
        element: <ImageEditor />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
