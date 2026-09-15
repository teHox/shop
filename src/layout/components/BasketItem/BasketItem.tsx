import { FC, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import styles from "./styles.module.scss";
import TextElement from "../../../components/TextElement/TextElement.tsx";
import Counter from "../../../components/Counter/Counter.tsx";
import { textTypes } from "../../../constants/constants.ts";

const BasketItem: FC = () => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className={styles.item}>
            <img src="img/basket-img.png" alt="" className={styles.img} />
            <TextElement
                content={"М'яка іграшка копіца патріотичний заєць"}
                className={styles.name}
            />
            <TextElement content={"#09392881"} className={styles.id} />
            <Counter quantity={quantity} setQuantity={setQuantity} />
            <div className={styles.delete}>
                <HiOutlineTrash size={15} stroke="#FFA0A0" />
            </div>
            <TextElement content={`Кількість: ${quantity}`} className={styles.count} />
            <div className={styles.price}>
                <TextElement
                    content={"915 ₴"}
                    type={textTypes.small}
                    className={styles.priceOld}
                />
                <TextElement
                    content={"515 ₴"}
                    type={textTypes.medium}
                    className={styles.priceNew}
                />
            </div>
        </div>
    );
};

export default BasketItem;
