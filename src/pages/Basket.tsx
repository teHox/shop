import { FC, memo } from "react";
import MainLayout from "../layout/MainLayout.tsx";
import BasketItem from "../components/basket/BasketItem.tsx";
import { useMediaQuery } from "react-responsive";

const BasketPage: FC = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    return (
        <MainLayout>
            {isMobile && (
                <div id="basket" className="popup-basket basket">
                    <div className="popup-basket__content basket__content">
                        <div className="popup-basket__catalog basket__catalog">
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
                        </div>
                        <div className="popup-basket__total-price">
                            <p className="medium">Сума замовлення:</p>
                            <p className="big">515 ₴</p>
                        </div>
                        <div className="popup-basket__buttons">
                            <button className="popup-basket__buy medium basket__buy">
                                Придбати
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

export default memo(BasketPage);
