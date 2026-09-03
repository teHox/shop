import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../../../constants/constants.ts";
import EventSvg from "../../svg/EventSvg.tsx";

const CatalogItem: FC = () => {
    return (
        <Link to="/product" className={styles.item}>
            <div className={styles.event}>
                <EventSvg />
                <TextElement content="Топ продажів" type={textTypes.small} />
            </div>
            <div className={styles.img}>
                <img src="img/catalog__item.png" alt="" />
            </div>
            <TextElement
                content="М'яка іграшка копіца патріотичний заєць"
                className={styles.name}
            />
            <div className={styles.bottom}>
                <div className={styles.price}>
                    <TextElement content="915 ₴" className={styles.priceOld} />
                    <TextElement
                        content="515 ₴"
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
