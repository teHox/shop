import { Dispatch, FC, SetStateAction } from "react";
import { FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";
import Modal from "../../../../components/Modal/Modal.tsx";
import TelegramSvg from "../../../../assets/svg/TelegramSvg/TelegramSvg.tsx";
import styles from "./styles.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../../../constants/constants.ts";
import clsx from "clsx";

type ConsultationModalProps = {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    consultationActive: boolean;
    setConsultationActive: Dispatch<SetStateAction<boolean>>;
};

const ConsultationModal: FC<ConsultationModalProps> = ({
    isVisible,
    setIsVisible,
    consultationActive,
    setConsultationActive,
}) => {
    return (
        <Modal
            isModalVisible={isVisible}
            setIsModalVisible={setIsVisible}
            isModalActive={consultationActive}
            setIsModalActive={setConsultationActive}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <TextElement
                        content={"+38 (095) 043-87-76"}
                        className={clsx(styles.leftText, styles.leftFirstText)}
                    />
                    <TextElement
                        content={"Зв'язатися"}
                        type={textTypes.medium}
                        className={styles.leftMedium}
                    />
                    <TextElement
                        content={"проспект 200-річчя Херсона, 35"}
                        className={styles.leftText}
                    />
                    <TextElement
                        content={"Пон - Пт: 8:00 - 17:00,"}
                        className={styles.leftText}
                    />
                    <TextElement
                        content={"Сб - Нд: 10:00 - 16:00,"}
                        className={styles.leftText}
                    />
                    <TextElement
                        content={"example_mail@gmail.com"}
                        className={styles.leftText}
                    />
                    <TextElement
                        content={"Соц. мережі"}
                        type={textTypes.medium}
                        className={styles.leftMedium}
                    />
                    <div className={styles.leftIcons}>
                        <FaInstagram size={20} fill="#98a8f8" />
                        <FaViber size={20} fill="#98a8f8" />
                        <TelegramSvg />
                        <FaWhatsapp size={20} fill="#98a8f8" />
                    </div>
                </div>
                <div className={styles.right}>
                    <TextElement
                        content={"Написати на пошту"}
                        className={styles.rightText}
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
                        <input type="button" value="Надіслати" />
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default ConsultationModal;
