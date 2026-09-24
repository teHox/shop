import { FC } from "react";
import CategoriesSvg from "../../svg/CategoriesSvg.tsx";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../../../constants/constants.ts";
import styles from "./styles.module.scss";

const categories = [
    {
        svg: <CategoriesSvg />,
        name: "Інтерактивні",
    },
    {
        svg: <CategoriesSvg />,
        name: "Інтерактивні",
    },
    {
        svg: <CategoriesSvg />,
        name: "Інтерактивні",
    },
    {
        svg: <CategoriesSvg />,
        name: "Інтерактивні",
    },
    {
        svg: <CategoriesSvg />,
        name: "Інтерактивні",
    },
    {
        svg: <CategoriesSvg />,
        name: "Інтерактивні",
    },
    {
        svg: <CategoriesSvg />,
        name: "Інтерактивні",
    },
    {
        svg: <CategoriesSvg />,
        name: "Інтерактивні",
    },
    {
        svg: <CategoriesSvg />,
        name: "Інтерактивні",
    },
    {
        svg: <CategoriesSvg />,
        name: "Інтерактивні",
    },
];

const Categories: FC = () => {
    return (
        <div className={styles.categories}>
            <TextElement
                content={"Каталог"}
                type={textTypes.medium}
                className={styles.medium}
            />
            <div className={styles.content}>
                {categories.map((item, i) => (
                    <div className={styles.item} key={i}>
                        {item.svg}
                        <TextElement
                            content={item.name}
                            type={textTypes.small}
                            className={styles.small}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
