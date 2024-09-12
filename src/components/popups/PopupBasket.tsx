import { Dispatch, FC, memo, SetStateAction, useEffect, useRef } from "react";
import PopupBasketItem from "./PopupBasketItem.tsx";

type PopupConsultationProps = {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    basketActive: boolean;
    setBasketActive: Dispatch<SetStateAction<boolean>>;
};

const PopupBasket: FC<PopupConsultationProps> = ({
    basketActive,
    setBasketActive,
    isVisible,
    setIsVisible,
}) => {
    const containerRef = useRef(null);

    const handleClickOutside = (event: MouseEvent) => {
        //@ts-expect-error
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsVisible((prev) => !prev);
            setBasketActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        basketActive && (
            <div
                id="basket"
                className={
                    basketActive ? "popup-basket popup-basket_active" : "popup-basket"
                }>
                <div ref={containerRef} className="popup-basket__body">
                    {isVisible && (
                        <div className="popup-basket__content">
                            <div className="popup-basket__catalog">
                                <PopupBasketItem />
                            </div>
                            <div className="popup-basket__total-price">
                                <p className="medium">Сума замовлення:</p>
                                <p className="big">515 ₴</p>
                            </div>
                            <div className="popup-basket__buttons">
                                <div className="popup-basket__close medium">
                                    Продовжити покупки
                                </div>
                                <button className="popup-basket__buy medium">
                                    Придбати
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    );
};

export default memo(PopupBasket);
