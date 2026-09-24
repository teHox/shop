import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home.tsx";
import AboutUsPage from "../pages/AboutUs/AboutUs.tsx";
import ProductPage from "../pages/Product/Product.tsx";
import ConsultationPage from "../pages/Consultation/Consultation.tsx";
import BasketPage from "../pages/Basket/Basket.tsx";
import CatalogPage from "../pages/Catalog/Catalog.tsx";

const routes = [
    { path: "/", element: <HomePage /> },
    { path: "about-us", element: <AboutUsPage /> },
    { path: "product", element: <ProductPage /> },
    { path: "consultation", element: <ConsultationPage /> },
    { path: "basket", element: <BasketPage /> },
    { path: "catalog", element: <CatalogPage /> },
];

export const router = () => createBrowserRouter(routes);
