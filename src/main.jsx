import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Profile from "./Component.jsx";
import Popeye from "./Popeye.jsx";
import Spinach from "./Spinach.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "profile",
        element: <Profile />,
        children: [
            { path: "spinach", element: <Spinach /> },
            { path: "popeye", element: <Popeye /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);