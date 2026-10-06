import { FC, MouseEvent, ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./styles.module.scss";
import clsx from "clsx";

type ModalProps = {
    isModalActive: boolean;
    setIsModalActive: (value: boolean) => void;
    children: ReactNode;
};

const Modal: FC<ModalProps> = ({ isModalActive, setIsModalActive, children }) => {
    const handleClose = () => {
        setIsModalActive(false);
    };

    const handleClickInside = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        isModalActive && (
            <div className={clsx(styles.modal, { [styles.modalActive]: isModalActive })}>
                <div onClick={handleClose} className={styles.modalBody}>
                    <div onClick={handleClickInside} className={styles.modalContent}>
                        <div
                            className={styles.modalClose}
                            onClick={() => setIsModalActive(false)}>
                            <IoMdClose size={7} fill="#98a8f8" />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
