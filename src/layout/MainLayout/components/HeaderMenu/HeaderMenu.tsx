import { FC, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import clsx from "clsx";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import BurgerBtn from "../BurgerBtn/BurgerBtn.tsx";
import { useUIStore } from "../../../../store/ui/useUIStore.ts";

const menuList = [
    {
        link: "/about-us",
        name: "Про нас",
    },
    {
        link: "/",
        name: "Головна",
    },
];

const categoryList = [
    {
        link: "/",
        name: "Інтерактивні",
    },
    {
        link: "/",
        name: "Інтерактивні",
    },
    {
        link: "/",
        name: "Інтерактивні",
    },
    {
        link: "/",
        name: "Інтерактивні",
    },
    {
        link: "/",
        name: "Інтерактивні",
    },
    {
        link: "/",
        name: "Інтерактивні",
    },
    {
        link: "/",
        name: "Інтерактивні",
    },
    {
        link: "/",
        name: "Інтерактивні",
    },
    {
        link: "/",
        name: "Інтерактивні",
    },
    {
        link: "/",
        name: "Інтерактивні",
    },
];

const HeaderMenu: FC = () => {
    const location = useLocation();
    const { isMenuActive, setIsMenuActive } = useUIStore();

    const handleChangeBurger = () => {
        setIsMenuActive(!isMenuActive);
    };

    useEffect(() => {
        setIsMenuActive(location.pathname === "/");
    }, [location.pathname]);

    return (
        <nav className={styles.menu}>
            <ul>
                {menuList.map((item) => (
                    <li>
                        <Link to={item.link}>
                            <TextElement content={item.name} hover={true} />
                        </Link>
                    </li>
                ))}
            </ul>
            <div className={styles.category}>
                <TextElement content={"Наші Категорії"} className={styles.title} />
                <BurgerBtn
                    handleChangeBurger={handleChangeBurger}
                    burgerActive={isMenuActive}
                />
                <div
                    className={clsx(styles.content, {
                        [styles.contentActive]: isMenuActive,
                    })}>
                    {categoryList.map((item) => (
                        <a href={item.link} className={styles.item}>
                            <div className={styles.circle}></div>
                            <TextElement content={item.name} />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default HeaderMenu;
