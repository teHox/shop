import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router()} />
);
