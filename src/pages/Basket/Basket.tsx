import { FC } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout.tsx";
import BasketItem from "./components/BasketItem/BasketItem.tsx";
import { useMediaQuery } from "react-responsive";
import styles from "./styles.module.scss";
import TextElement from "../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../constants/constants.ts";

const BasketPage: FC = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    return (
        <MainLayout>
            {isMobile && (
                <div id="basket" className={styles.basket}>
                    <div className={styles.content}>
                        <div className={styles.catalog}>
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
                        </div>
                        <div className={styles.totalPrice}>
                            <TextElement
                                content={"Сума замовлення:"}
                                type={textTypes.medium}
                            />
                            <TextElement content={"515 ₴"} type={textTypes.big} />
                        </div>
                        <button className={styles.buy}>Придбати</button>
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

export default BasketPage;
