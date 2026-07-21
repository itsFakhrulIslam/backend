import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import UserDetails from "./components/UserDetails.jsx";
import Update from "./components/Update.jsx";

// react router setup here
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "users/:id",
    loader: ({ params }) => fetch(`http://localhost:2030/users/${params.id}`),
    Component: UserDetails,
  },
  {
    path: "update/:id",
    loader: ({ params }) => fetch(`http://localhost:2030/users/${params.id}`),
    Component: Update,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
