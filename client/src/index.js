import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./css/main.css";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/Main";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";

import Item from "./pages/Item";
import EditCollection from "./pages/EditCollection";
import CollectionItems from "./pages/CollectionItems";
import CreateItem from "./pages/CreateItem";
import EditItem from "./pages/EditItem";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },
      { path: "home", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> }, // here collections and profile info
      { path: "profile/edit", element: <EditProfile /> }, // here profile edit page
      { path: "profile/editcollection", element: <EditCollection /> }, // here edit collection page
      { path: "profile/:id/:name", element: <CollectionItems /> }, // here items of collection
      { path: "item", element: <Item /> }, // here item object
      { path: "item/edit", element: <EditItem /> }, // here edit item object
      { path: "create", element: <CreateItem /> }, // here create item object
      { path: "logout", element: <Logout /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
