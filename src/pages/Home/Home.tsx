import { FC } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout.tsx";
import Banner from "./components/Banner/Banner.tsx";
import BannerMobile from "../../components/BannerMobile/BannerMobile.tsx";
import { useMediaQuery } from "react-responsive";
import Catalog from "./components/Catalog/Catalog.tsx";
import { mobileMediaWidth } from "../../constants/constants.ts";
import Search from "../../components/Search/Search.tsx";

const HomePage: FC = () => {
    const isMobile = useMediaQuery({
        query: mobileMediaWidth,
    });

    return (
        <MainLayout>
            {isMobile ? <BannerMobile /> : <Banner />}
            {isMobile && <Search />}
            <Catalog />
        </MainLayout>
    );
};

export default HomePage;
