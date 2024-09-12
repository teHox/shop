import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home.tsx";
import AboutUsPage from "../pages/AboutUs.tsx";
import ProductPage from "../pages/Product.tsx";
import ConsultationPage from "../pages/Consultation.tsx";
import BasketPage from "../pages/Basket.tsx";
import CatalogPage from "../pages/Catalog.tsx";

export const router = () =>
    createBrowserRouter([
        { path: "/", element: <HomePage /> },
        { path: "about-us", element: <AboutUsPage /> },
        { path: "product", element: <ProductPage /> },
        { path: "consultation", element: <ConsultationPage /> },
        { path: "basket", element: <BasketPage /> },
        { path: "catalog", element: <CatalogPage /> },
    ]);
