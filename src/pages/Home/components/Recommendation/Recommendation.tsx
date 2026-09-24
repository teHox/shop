import styles from "./styles.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../../../constants/constants.ts";

const Recommendation = () => {
    return (
        <div className={styles.recomendation}>
            <div className={styles.title}>
                <div className={styles.line}></div>
                <TextElement content={"Р е к о м е н д а ц і ї"} />
            </div>
            <div className={styles.content}>
                <img src="img/banner__recomendation.png" alt="" />
                <div className={styles.price}>
                    <TextElement
                        content={"915 ₴"}
                        type={textTypes.big}
                        className={styles.priceNew}
                    />
                    <TextElement content={"515 ₴"} className={styles.priceOld} />
                </div>
            </div>
        </div>
    );
};

export default Recommendation;
