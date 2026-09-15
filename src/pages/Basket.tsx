import { FC } from "react";
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
                <div id="basket" className="basket">
                    <div className="basket__content">
                        <div className="basket__catalog">
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
                        </div>
                        <div className="basket__total-price">
                            <p className="medium">Сума замовлення:</p>
                            <p className="big">515 ₴</p>
                        </div>
                        <button className="medium basket__buy">Придбати</button>
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

export default BasketPage;
