import { FC } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout.tsx";
import { FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.scss";
import clsx from "clsx";
import TextElement from "../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../constants/constants.ts";
import TelegramSvg from "../../assets/svg/TelegramSvg/TelegramSvg.tsx";

const ConsultationPage: FC = () => {
    return (
        <MainLayout>
            <div id="consultation" className={styles.consultation}>
                <div className={styles.content}>
                    <div className={styles.contact}>
                        <TextElement
                            content={"+38 (095) 043-87-76"}
                            className={clsx(styles.text, styles.textMB)}
                        />
                        <TextElement
                            content={"Зв'язатися"}
                            type={textTypes.medium}
                            className={styles.text}
                        />
                        <TextElement
                            content={"проспект 200-річчя Херсона, 35"}
                            className={styles.text}
                        />
                        <TextElement
                            content={"Пон - Пт: 8:00 - 17:00,"}
                            className={styles.text}
                        />
                        <TextElement
                            content={"Сб - Нд: 10:00 - 16:00,"}
                            className={styles.text}
                        />
                        <TextElement
                            content={"example_mail@gmail.com"}
                            className={styles.text}
                        />
                        <TextElement
                            content={"Соц. мережі"}
                            type={textTypes.medium}
                            className={styles.text}
                        />
                        <div className={styles.icons}>
                            <FaInstagram size={20} fill="#98a8f8" />
                            <FaViber size={20} fill="#98a8f8" />
                            <TelegramSvg />
                            <FaWhatsapp size={20} fill="#98a8f8" />
                        </div>
                    </div>
                    <div className={styles.form}>
                        <TextElement
                            content={"Написати на пошту"}
                            className={styles.textMB}
                        />
                        <form action="">
                            <input type="text" name="name" id="name" placeholder="Ім'я" />
                            <input
                                type="email"
                                name="mail"
                                id="mail"
                                placeholder="Ел.пошта"
                            />
                            <textarea
                                name="message"
                                id="message"
                                cols={10}
                                rows={2}
                                placeholder="Ваше повідомлення"></textarea>
                            <input className="medium" type="button" value="Надіслати" />
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ConsultationPage;
