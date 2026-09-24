import { FC } from "react";
import CatalogItem from "../CatalogItem/CatalogItem.tsx";
import styles from "./styles.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../../../constants/constants.ts";

const items = [
    {
        id: 1,
        name: "М'яка іграшка копіца патріотичний заєць",
        price: 900,
        priceOld: 1200,
        image: "img/catalog__item.png",
    },
    {
        id: 2,
        name: "М'яка іграшка копіца патріотичний заєць",
        price: 600,
        priceOld: 800,
        image: "img/catalog__item.png",
    },
    {
        id: 3,
        name: "М'яка іграшка копіца патріотичний заєць",
        price: 1700,
        priceOld: 2000,
        image: "img/catalog__item.png",
    },
    {
        id: 4,
        name: "М'яка іграшка копіца патріотичний заєць",
        price: 300,
        priceOld: 600,
        image: "img/catalog__item.png",
    },
    {
        id: 5,
        name: "М'яка іграшка копіца патріотичний заєць",
        price: 900,
        priceOld: 1200,
        image: "img/catalog__item.png",
    },
];

const Catalog: FC = () => {
    return (
        <div>
            <div className={styles.title}>
                <TextElement content="М'які іграшки" type={textTypes.medium} />
                <TextElement content="За рейтингом" />
            </div>
            <div className={styles.catalog}>
                {items.map((item) => (
                    <CatalogItem item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
