import { FC, memo } from "react";
import MainLayout from "../layout/MainLayout.tsx";

const AboutUsPage: FC = () => {
    return (
        <MainLayout>
            <div className="about-us">
                <div className="about-us__left">
                    <h1 className="title">Про нашу компанію</h1>
                    <p className="text">
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
                    <div className="about-us__content">
                        <div className="about-us__item">
                            <h2 className="big">10.000+</h2>
                            <p className="text">
                                Тисячі товарів вже у будинках у тисяч людей
                            </p>
                        </div>
                        <div className="about-us__item">
                            <h2 className="big">300+</h2>
                            <p className="text">Відгуки на відомих майданчиках</p>
                        </div>
                        <div className="about-us__item">
                            <h2 className="big">15+</h2>
                            <p className="text">Наш досвід говорить сам за себе</p>
                        </div>
                    </div>
                </div>
                <a
                    href="https://goo.gl/maps/zLfqbapSETk7kjADA"
                    className="about-us__right"
                    target="_blank">
                    <img
                        src="../public/img/about-us__map.png"
                        alt=""
                        className="about-us__img"
                    />
                    <div className="about-us__link">
                        <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.6667 6.83329V11.8333C17.6667 13.9166 17.25 15.375 16.3167 16.3166L11 11L17.4417 4.55829C17.5917 5.21662 17.6667 5.96662 17.6667 6.83329Z"
                                stroke="#98A8F8"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17.4417 4.55833L4.55833 17.4417C2.05 16.8667 1 15.1333 1 11.8333V6.83333C1 2.66667 2.66667 1 6.83333 1H11.8333C15.1333 1 16.8667 2.05 17.4417 4.55833Z"
                                stroke="#98A8F8"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.3167 16.3167C15.375 17.25 13.9167 17.6667 11.8333 17.6667H6.83335C5.96668 17.6667 5.21668 17.5917 4.55835 17.4417L11 11L16.3167 16.3167Z"
                                stroke="#98A8F8"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4.53335 5.98329C5.10002 3.54162 8.76668 3.54162 9.33335 5.98329C9.65835 7.41662 8.75835 8.63329 7.96668 9.38329C7.68789 9.64825 7.31797 9.79599 6.93335 9.79599C6.54873 9.79599 6.17881 9.64825 5.90002 9.38329C5.10835 8.63329 4.20002 7.41662 4.53335 5.98329V5.98329Z"
                                stroke="#98A8F8"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M6.9126 6.58331H6.9201"
                                stroke="#98A8F8"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="text">Використати Google Maps</p>
                    </div>
                </a>
            </div>
        </MainLayout>
    );
};

export default memo(AboutUsPage);
