import { FC } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout.tsx";
import AboutUsMapSvg from "./svg/AboutUsMapSvg.tsx";
import styles from "./styles.module.scss";
import TextElement from "../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../constants/constants.ts";

const AboutUsPage: FC = () => {
    return (
        <MainLayout>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Про нашу компанію</h1>
                    <p className={styles.description}>
                        <b>Дорогі</b> мами та тати наш Магазин дитячих товарів та іграшок
                        володіє широким асортиментом різних напрямків, які допоможуть
                        знайти кожному батькові свій неповторний подарунок для дитини
                        будь-якого віку. <br />
                        <b>Наш</b> магазин працює на ринку України з 2002 року. За цей час
                        ми суттєво розширили та продовжуємо розширювати асортимент
                        товарів, покращуємо сервіс обслуговування і сьогодні по праву
                        можемо називатися величезним магазином іграшок та товарів для
                        творчості, бо наш каталог нараховує щодня більше 50 000 товарів у
                        наявності. Для вашого комфорту та економії часу ми надаємо цілу
                        мережу відділень та складів найрізноманітніших перевізників по
                        всій Україні.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.statsItem}>
                            <TextElement
                                content={"10.000+"}
                                type={textTypes.big}
                                className={styles.statsTitle}
                            />
                            <TextElement
                                content={"Тисячі товарів вже у будинках у тисяч людей"}
                                className={styles.statsText}
                            />
                        </div>
                        <div className={styles.statsItem}>
                            <TextElement
                                content={"300+"}
                                type={textTypes.big}
                                className={styles.statsTitle}
                            />
                            <TextElement
                                content={"Відгуки на відомих майданчиках"}
                                className={styles.statsText}
                            />
                        </div>
                        <div className={styles.statsItem}>
                            <TextElement
                                content={"15+"}
                                type={textTypes.big}
                                className={styles.statsTitle}
                            />
                            <TextElement
                                content={"Наш досвід говорить сам за себе"}
                                className={styles.statsText}
                            />
                        </div>
                    </div>
                </div>
                <a
                    href="https://goo.gl/maps/zLfqbapSETk7kjADA"
                    className={styles.map}
                    target="_blank">
                    <img
                        src="../public/img/about-us__map.png"
                        alt=""
                        className={styles.img}
                    />
                    <div className={styles.link}>
                        <AboutUsMapSvg />
                        <TextElement content={"Використати Google Maps"} />
                    </div>
                </a>
            </div>
        </MainLayout>
    );
};

export default AboutUsPage;
