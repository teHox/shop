import { FC } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout.tsx";
import BannerMobile from "../../components/BannerMobile/BannerMobile.tsx";
import { useMediaQuery } from "react-responsive";
import Categories from "./components/Categories/Categories.tsx";
import { mobileMediaWidth } from "../../constants/constants.ts";
import Search from "../../components/Search/Search.tsx";

const CatalogPage: FC = () => {
    const isMobile = useMediaQuery({
        query: mobileMediaWidth,
    });

    return (
        <MainLayout>
            {isMobile && (
                <>
                    <BannerMobile />
                    <Search />
                    <Categories />
                </>
            )}
        </MainLayout>
    );
};

export default CatalogPage;
