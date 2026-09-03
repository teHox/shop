import { FC } from "react";
import CatalogItem from "../CatalogItem/CatalogItem.tsx";
import styles from "./styles.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../../../constants/constants.ts";

const Catalog: FC = () => {
    return (
        <div>
            <div className={styles.title}>
                <TextElement content="М'які іграшки" type={textTypes.medium} />
                <TextElement content="За рейтингом" />
            </div>
            <div className={styles.catalog}>
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
            </div>
        </div>
    );
};

export default Catalog;
