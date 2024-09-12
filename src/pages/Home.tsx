import { FC, memo } from "react";
import MainLayout from "../layout/MainLayout.tsx";
import Banner from "../components/banner/Banner.tsx";
import BannerMobile from "../components/banner/BannerMobile.tsx";
import { useMediaQuery } from "react-responsive";
import Catalog from "../components/catalog/Catalog.tsx";

const HomePage: FC = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
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
