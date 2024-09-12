import { FC, memo } from "react";
import MainLayout from "../layout/MainLayout.tsx";
import BannerMobile from "../components/banner/BannerMobile.tsx";
import { useMediaQuery } from "react-responsive";
import Categories from "../components/categories/Categories.tsx";

const CatalogPage: FC = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
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

export default memo(CatalogPage);
