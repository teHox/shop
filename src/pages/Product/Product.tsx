import { FC, memo } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout.tsx";
import ProductTips from "./components/ProductTips/ProductTips.tsx";
import TextElement from "../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../constants/constants.ts";
import styles from "./styles.module.scss";
import ProductBasketSvg from "./svg/ProductBasketSvg.tsx";
import ProductWalletSvg from "./svg/ProductWalletSvg.tsx";
import ProductDescriptionSvg from "./svg/ProductDescriptionSvg.tsx";

const productData = {
    name: "М'яка іграшка копіца патріотичний заєць #09392881",
    price: 515,
    priceOld: 915,
    description:
        "М'яка іграшка Копиця Патріотичний Заєць, 32 см - тренд 2022 року серед жителів України, який завжди буде наповнювати їх патріотичним духом..",
};

const ProductPage: FC = () => {
    return (
        <MainLayout>
            <div className={styles.product}>
                <TextElement
                    content={productData.name}
                    type={textTypes.big}
                    className={styles.title}
                />
                <div className={styles.content}>
                    <div className={styles.contentLeft}>
                        <img src="img/product__image.png" alt="" />
                    </div>
                    <div className={styles.contentRight}>
                        <div className={styles.purchase}>
                            <TextElement
                                content={productData.name}
                                type={textTypes.medium}
                                isMobile={true}
                                className={styles.purchaseTitle}
                            />
                            <div className={styles.price}>
                                <TextElement
                                    content={`${productData.priceOld} ₴`}
                                    type={textTypes.medium}
                                    className={styles.priceOld}
                                />
                                <TextElement
                                    content={`${productData.price} ₴`}
                                    type={textTypes.title}
                                    className={styles.priceNew}
                                />
                            </div>
                            <button className={styles.button}>
                                <ProductBasketSvg />
                                <TextElement
                                    content={"Придбати"}
                                    className={styles.buttonText}
                                />
                            </button>
                        </div>
                        <div className={styles.point}>
                            Доставка місто: <b>Херсон</b>
                        </div>
                        <ProductTips />
                        <TextElement
                            content={"Оплата:"}
                            className={styles.descriptionTitle}
                        />
                        <div className={styles.description}>
                            <ProductWalletSvg />
                            <TextElement
                                content={
                                    "Оплата під час отримання товару, Google Pay, Картою онлайн, Безготівковими для юридичних осіб, Оплатити онлайн соціальною картою."
                                }
                                className={styles.descriptionText}
                            />
                        </div>
                        <TextElement
                            content={"Опис товару:"}
                            className={styles.descriptionTitle}
                        />
                        <div className={styles.description}>
                            <ProductDescriptionSvg />
                            <TextElement
                                content={productData.description}
                                className={styles.descriptionText}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default memo(ProductPage);
