import { FC, memo } from "react";
import MainLayout from "../layout/MainLayout.tsx";
import { FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";

const ConsultationPage: FC = () => {
    return (
        <MainLayout>
            <div id="consultation" className="popup-consultation consultation">
                <div className="popup-consultation__content consultation__content">
                    <div className="popup-consultation__left consultation__left">
                        <p className="text">+38 (095) 043-87-76</p>
                        <h3 className="medium">Зв'язатися</h3>
                        <p className="text">проспект 200-річчя Херсона, 35</p>
                        <p className="text">Пон - Пт: 8:00 - 17:00,</p>
                        <p className="text">Сб - Нд: 10:00 - 16:00,</p>
                        <p className="text popup-consultation__last consultation__last">
                            example_mail@gmail.com
                        </p>
                        <h3 className="medium">Соц. мережі</h3>
                        <div className="popup-consultation__icons">
                            <FaInstagram size={20} fill="#98a8f8" />
                            <FaViber size={20} fill="#98a8f8" />
                            <div className="popup-consultation__telegram"></div>
                            <FaWhatsapp size={20} fill="#98a8f8" />
                        </div>
                    </div>
                    <div className="popup-consultation__right consultation__right">
                        <div className="text">Написати на пошту</div>
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

export default memo(ConsultationPage);
