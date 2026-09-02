import { FC, memo } from "react";
import styles from "./styles.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import Recommendation from "../Recommendation/Recommendation.tsx";

const bannerItems = [
    {
        title: 'ПЛЮШЕВИЙ ВЕДМІДЬ "Ігор"',
        description:
            "Це іграшка, яка не залишить байдужими як малюків,так і їхніх\n" +
            "                        батьків.",
    },
    {
        title: 'ПЛЮШЕВИЙ ВЕДМІДЬ "Ігор"',
        description:
            "Це іграшка, яка не залишить байдужими як малюків,так і їхніх\n" +
            "                        батьків.",
    },
];

const Banner: FC = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.item}>
                <img src="img/banner__big.png" alt="" />
                <div className={styles.description}>
                    <h1 className={styles.title}>ПЛЮШЕВИЙ ВЕДМІДЬ "Єгор"</h1>
                    <button className={styles.button}>
                        <TextElement content="ПРИДБАТИ ЗАРАЗ" />
                    </button>
                </div>
            </div>
            {bannerItems.map((item) => (
                <div className={styles.item}>
                    <div>
                        <span className={styles.bannerTitle}>{item.title}</span>
                        <TextElement content={item.description} />
                    </div>
                    <img src="img/banner__small.png" alt="banner-small" />
                </div>
            ))}
            <Recommendation />
        </div>
    );
};

export default memo(Banner);
