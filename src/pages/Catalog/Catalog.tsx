import { FC } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout.tsx";
import BannerMobile from "../../components/BannerMobile/BannerMobile.tsx";
import { useMediaQuery } from "react-responsive";
import Categories from "./components/Categories/Categories.tsx";
import { mobileMediaWidth } from "../../constants/constants.ts";

const CatalogPage: FC = () => {
    const isMobile = useMediaQuery({
        query: mobileMediaWidth,
    });

    return (
        <MainLayout>
            {isMobile && (
                <>
                    <BannerMobile />
                    <input
                        type="search"
                        className="search-mobile"
                        name="seacrh-mobile"
                        placeholder="Пошук ..."
                    />
                    <Categories />
                </>
            )}
        </MainLayout>
    );
};

export default CatalogPage;
