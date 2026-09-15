import { Dispatch, FC, SetStateAction } from "react";
import styles from "./styles.module.scss";
import TextElement from "../TextElement/TextElement.tsx";
import { textTypes } from "../../constants/constants.ts";

type CounterProps = {
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
};

const Counter: FC<CounterProps> = ({ quantity, setQuantity }) => {
    return (
        <div className={styles.group}>
            <input
                type="button"
                value="-"
                className={styles.buttonMinus}
                data-field="quantity"
                onClick={() => {
                    if (quantity == 1) {
                        return setQuantity(1);
                    }
                    setQuantity((prev) => prev - 1);
                }}
            />
            <input
                type="number"
                step="1"
                value={quantity}
                name="quantity"
                className={styles.quantityField}
                onChange={(e) => {
                    setQuantity(Number(e.target.value));
                }}
            />
            <input
                type="button"
                value="+"
                className={styles.buttonPlus}
                data-field="quantity"
                onClick={() => setQuantity((prev) => prev + 1)}
            />
            <TextElement
                content={"x 515 ₴"}
                type={textTypes.medium}
                className={styles.text}
            />
        </div>
    );
};

export default Counter;
