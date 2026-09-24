import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../../../constants/constants.ts";
import EventSvg from "../../svg/EventSvg.tsx";
import { CatalogItemType } from "../../../../constants/types.ts";

type CatalogItemProps = {
    item: CatalogItemType;
};

const CatalogItem: FC<CatalogItemProps> = ({ item }) => {
    return (
        <Link to="/product" className={styles.item}>
            <div className={styles.event}>
                <EventSvg />
                <TextElement content="Топ продажів" type={textTypes.small} />
            </div>
            <div className={styles.img}>
                <img src={item.image} alt="" />
            </div>
            <TextElement content={item.name} className={styles.name} />
            <div className={styles.bottom}>
                <div className={styles.price}>
                    <TextElement
                        content={item.priceOld + " ₴"}
                        className={styles.priceOld}
                    />
                    <TextElement
                        content={item.price + " ₴"}
                        className={styles.priceNew}
                        type={textTypes.big}
                    />
                </div>
                <div className={styles.svg}></div>
            </div>
        </Link>
    );
};

export default CatalogItem;
