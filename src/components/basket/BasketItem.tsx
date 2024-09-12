import { FC, memo, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

const BasketItem: FC = () => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="popup-basket__item basket__item">
            <div className="popup-basket__img basket__img">
                <img src="../public/img/basket-img.png" alt="" />
            </div>
            <p className="text popup-basket__name basket__name">
                М'яка іграшка копіца патріотичний заєць
            </p>
            <p className="text popup-basket__id basket__id">#09392881</p>
            <div className="input-group">
                <input
                    type="button"
                    value="-"
                    className="button-minus"
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
                    max=""
                    value="1"
                    name="quantity"
                    className="quantity-field"
                    onChange={(e) => {
                        setQuantity(Number(e.target.value));
                    }}
                />
                <input
                    type="button"
                    value="+"
                    className="button-plus"
                    data-field="quantity"
                    onClick={() => setQuantity((prev) => prev + 1)}
                />
                <p className="medium popup-basket__per-item basket__per-item">x 515 ₴</p>
            </div>
            <div className="popup-basket__delate">
                <HiOutlineTrash size={15} stroke="#FFA0A0" />
            </div>
            <p className="text popup-basket__count basket__count">
                Кількість: {quantity}
            </p>
            <div className="popup-basket__price basket__price">
                <p className="popup-basket__old small basket__old">915 ₴</p>
                <p className="popup-basket__new medium basket__new">515 ₴</p>
            </div>
        </div>
    );
};

export default memo(BasketItem);
