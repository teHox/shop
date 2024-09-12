import { FC, memo, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

const PopupBasketItem: FC = () => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="popup-basket__item">
            <img src="img/basket-img.png" alt="" className="popup-basket__img" />
            <p className="text popup-basket__name">
                М'яка іграшка копіца патріотичний заєць
            </p>
            <p className="text popup-basket__id">#09392881</p>
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
                    value={quantity}
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
                <p className="medium popup-basket__per-item">x 515 ₴</p>
            </div>
            <div className="popup-basket__delate">
                <HiOutlineTrash size={15} stroke="#FFA0A0" />
            </div>
            <p className="text popup-basket__count">Кількість: {quantity}</p>
            <div className="popup-basket__price">
                <p className="popup-basket__old small">915 ₴</p>
                <p className="popup-basket__new medium">515 ₴</p>
            </div>
        </div>
    );
};

export default memo(PopupBasketItem);
