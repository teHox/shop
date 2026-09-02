import { FC, memo } from "react";
import MainLayout from "../../layout/MainLayout.tsx";
import Banner from "./components/Banner/Banner.tsx";
import BannerMobile from "../../components/BannerMobile/BannerMobile.tsx";
import { useMediaQuery } from "react-responsive";
import Catalog from "../../components/catalog/Catalog.tsx";
import { mobileMediaWidth } from "../../constants/constants.ts";

const HomePage: FC = () => {
    const isMobile = useMediaQuery({
        query: mobileMediaWidth,
    });

    return (
        <MainLayout>
            {isMobile ? <BannerMobile /> : <Banner />}
            {isMobile && (
                <input
                    type="search"
                    className="search-mobile"
                    name="seacrh-mobile"
                    placeholder="Пошук ..."
                />
            )}
            <Catalog />
        </MainLayout>
    );
};

export default memo(HomePage);
