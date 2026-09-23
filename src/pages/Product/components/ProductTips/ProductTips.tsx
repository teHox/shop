import { FC, memo } from "react";
import ProductTips1Svg from "./svg/ProductTips1Svg.tsx";
import ProductTips2Svg from "./svg/ProductTips2Svg.tsx";
import ProductTips3Svg from "./svg/ProductTips3Svg.tsx";
import ProductTips4Svg from "./svg/ProductTips4Svg.tsx";
import ProductTips5Svg from "./svg/ProductTips5Svg.tsx";
import ProductTips6Svg from "./svg/ProductTips6Svg.tsx";
import ProductTips7Svg from "./svg/ProductTips7Svg.tsx";
import ProductTips8Svg from "./svg/ProductTips8Svg.tsx";
import ProductTips9Svg from "./svg/ProductTips9Svg.tsx";
import styles from "./styles.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";

const ProductTips: FC = () => {
    return (
        <div className={styles.delivery}>
            <div className={styles.group}>
                <div className={styles.item}>
                    <ProductTips1Svg />
                    <TextElement content={"Самовивіз з магазину"} />
                </div>
                <div className={styles.item}>
                    <ProductTips2Svg />
                    <TextElement content={"З поштових відділень"} />
                </div>
                <div className={styles.item}>
                    <ProductTips3Svg />
                    <TextElement content={"Доставка кур'єром"} />
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.group}>
                <div className={styles.item}>
                    <ProductTips4Svg />
                    <TextElement content={"Забрати сьогодні"} />
                </div>
                <div className={styles.item}>
                    <ProductTips5Svg />
                    <TextElement content={"Відправимо протягом 12 годин"} />
                </div>
                <div className={styles.item}>
                    <ProductTips6Svg />
                    <TextElement content={"Посилка прийде протягом 2 днів"} />
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.group}>
                <div className={styles.item}>
                    <ProductTips7Svg />
                    <TextElement content={"Безкоштовно"} />
                </div>
                <div className={styles.item}>
                    <ProductTips8Svg />
                    <TextElement content={"10.00 ₴ - 55.00 ₴"} />
                </div>
                <div className={styles.item}>
                    <ProductTips9Svg />
                    <TextElement content={"99.00 ₴"} />
                </div>
            </div>
        </div>
    );
};

export default memo(ProductTips);
