import { Dispatch, FC, SetStateAction } from "react";
import PopupBasketItem from "../BasketItem/BasketItem.tsx";
import Modal from "../../../components/Modal/Modal.tsx";
import styles from "./styles.module.scss";
import TextElement from "../../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../../constants/constants.ts";

type BasketModalProps = {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    basketActive: boolean;
    setBasketActive: Dispatch<SetStateAction<boolean>>;
};

const BasketModal: FC<BasketModalProps> = ({
    isVisible,
    setIsVisible,
    basketActive,
    setBasketActive,
}) => {
    return (
        <Modal
            isModalVisible={isVisible}
            setIsModalVisible={setIsVisible}
            isModalActive={basketActive}
            setIsModalActive={setBasketActive}>
            <div className={styles.content}>
                <div className={styles.catalog}>
                    <PopupBasketItem />
                </div>
                <div className={styles.totalPrice}>
                    <TextElement content={"Сума замовлення:"} type={textTypes.medium} />
                    <TextElement
                        content={"515 ₴"}
                        type={textTypes.big}
                        className={styles.sum}
                    />
                </div>
                <div className={styles.buttons}>
                    <TextElement
                        onClick={() => setBasketActive((prev) => !prev)}
                        content={"Продовжити покупки"}
                        className={styles.close}
                        type={textTypes.medium}
                    />
                    <TextElement
                        content={"Придбати"}
                        className={styles.buy}
                        type={textTypes.medium}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default BasketModal;
