import { Dispatch, FC, MouseEvent, ReactNode, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./styles.module.scss";
import clsx from "clsx";

type ModalProps = {
    isModalVisible: boolean;
    setIsModalVisible: Dispatch<SetStateAction<boolean>>;
    isModalActive: boolean;
    setIsModalActive: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
};

const Modal: FC<ModalProps> = ({
    isModalVisible,
    setIsModalVisible,
    isModalActive,
    setIsModalActive,
    children,
}) => {
    const handleClose = () => {
        setIsModalVisible((prev) => !prev);
        setIsModalActive(false);
    };

    const handleClickInside = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        isModalActive && (
            <div className={clsx(styles.modal, { [styles.modalActive]: isModalActive })}>
                <div onClick={handleClose} className={styles.modalBody}>
                    {isModalVisible && (
                        <div onClick={handleClickInside} className={styles.modalContent}>
                            <div
                                className={styles.modalClose}
                                onClick={() => setIsModalActive((prev) => !prev)}>
                                <IoMdClose size={7} fill="#98a8f8" />
                            </div>
                            {children}
                        </div>
                    )}
                </div>
            </div>
        )
    );
};

export default Modal;
