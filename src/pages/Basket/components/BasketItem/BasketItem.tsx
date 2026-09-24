import { FC, memo, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Counter from "../../../../components/Counter/Counter.tsx";
import styles from "./styles.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";

const BasketItem: FC = () => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <img src="../public/img/basket-img.png" alt="" />
            </div>
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
                <TextElement content={"515 ₴"} />
            </div>
        </div>
    );
};

export default memo(BasketItem);
