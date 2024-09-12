import { Dispatch, FC, memo, SetStateAction, useEffect, useRef } from "react";
import { FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type PopupConsultationProps = {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    consultationActive: boolean;
    setConsultationActive: Dispatch<SetStateAction<boolean>>;
};

const PopupConsultation: FC<PopupConsultationProps> = ({
    isVisible,
    setIsVisible,
    consultationActive,
    setConsultationActive,
}) => {
    const containerRef = useRef(null);

    const handleClickOutside = (event: MouseEvent) => {
        //@ts-expect-error
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsVisible((prev) => !prev);
            setConsultationActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        consultationActive && (
            <div
                className={
                    consultationActive
                        ? "popup-consultation popup-consultation_active"
                        : "popup-consultation"
                }>
                <div ref={containerRef} className="popup-consultation__body">
                    {isVisible && (
                        <div className="popup-consultation__content">
                            <div
                                className="popup-consultation__close"
                                onClick={() => setConsultationActive((prev) => !prev)}>
                                <IoMdClose size={7} fill="#98a8f8" />
                            </div>
                            <div className="popup-consultation__left">
                                <p className="text">+38 (095) 043-87-76</p>
                                <h3 className="medium">Зв'язатися</h3>
                                <p className="text">проспект 200-річчя Херсона, 35</p>
                                <p className="text">Пон - Пт: 8:00 - 17:00,</p>
                                <p className="text">Сб - Нд: 10:00 - 16:00,</p>
                                <p className="text popup-consultation__last">
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
                            <div className="popup-consultation__right">
                                <div className="text">Написати на пошту</div>
                                <form action="">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Ім'я"
                                    />
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
                    )}
                </div>
            </div>
        )
    );
};

export default memo(PopupConsultation);
