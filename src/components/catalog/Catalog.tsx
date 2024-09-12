import { FC, memo } from "react";
import CatalogItem from "./CatalogItem.tsx";

const Catalog: FC = () => {
    return (
        <div className="catalog">
            <div className="catalog__title">
                <h2 className="medium">М'які іграшки</h2>
                <p className="text">За рейтингом</p>
            </div>
            <div className="catalog__content">
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
            </div>
        </div>
    );
};

export default memo(Catalog);
