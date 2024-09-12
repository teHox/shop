import { FC, memo } from "react";
import MainLayout from "../layout/MainLayout.tsx";
import ProductTips from "../components/product/ProductTips.tsx";
import ProductPurchase from "../components/product/ProductPurchase.tsx";

const ProductPage: FC = () => {
    return (
        <MainLayout>
            <div className="product">
                <h1 className="big">М'яка іграшка копіца патріотичний заєць #09392881</h1>
                <div className="product__content">
                    <div className="product__left">
                        <img src="img/product__image.png" alt="" />
                    </div>
                    <div className="product__right">
                        <ProductPurchase />
                        <div className="product__point text">
                            Доставка місто: <b>Херсон</b>
                        </div>
                        <ProductTips />
                        <h5 className="text">Оплата:</h5>
                        <div className="product__description">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.0334 11.2916C14.6834 11.6333 14.4834 12.125 14.5334 12.65C14.6084 13.55 15.4334 14.2083 16.3334 14.2083H17.9167V15.2C17.9167 16.925 16.5084 18.3333 14.7834 18.3333H5.21671C3.49171 18.3333 2.08337 16.925 2.08337 15.2V9.59165C2.08337 7.86665 3.49171 6.45831 5.21671 6.45831H14.7834C16.5084 6.45831 17.9167 7.86665 17.9167 9.59165V10.7916H16.2334C15.7667 10.7916 15.3417 10.975 15.0334 11.2916Z"
                                    stroke="black"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2.08337 10.3416V6.53331C2.08337 5.54165 2.69171 4.65831 3.61671 4.30831L10.2334 1.80831C10.4731 1.71797 10.7312 1.68715 10.9855 1.7185C11.2397 1.74986 11.4826 1.84244 11.6932 1.98832C11.9038 2.13419 12.0759 2.32899 12.1947 2.556C12.3134 2.78301 12.3753 3.03545 12.375 3.29165V6.45831M5.83337 9.99998H11.6667M18.7992 11.6416V13.3583C18.7992 13.8166 18.4325 14.1916 17.9659 14.2083H16.3325C15.4325 14.2083 14.6075 13.55 14.5325 12.65C14.4825 12.125 14.6825 11.6333 15.0325 11.2916C15.3409 10.975 15.7659 10.7916 16.2325 10.7916H17.9659C18.4325 10.8083 18.7992 11.1833 18.7992 11.6416V11.6416Z"
                                    stroke="black"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className="text">
                                Оплата під час отримання товару, Google Pay, Картою
                                онлайн, Безготівковими для юридичних осіб, Оплатити онлайн
                                соціальною картою.
                            </p>
                        </div>
                        <h5 className="text">Опис товару:</h5>
                        <div className="product__description">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.8334 5.83331H12.5M7.50004 5.83331H4.16671M2.50004 7.49998C2.94207 7.49998 3.36599 7.32438 3.67855 7.01182C3.99111 6.69926 4.16671 6.27534 4.16671 5.83331C4.16671 5.39129 3.99111 4.96736 3.67855 4.6548C3.36599 4.34224 2.94207 4.16665 2.50004 4.16665C2.05801 4.16665 1.63409 4.34224 1.32153 4.6548C1.00897 4.96736 0.833374 5.39129 0.833374 5.83331C0.833374 6.27534 1.00897 6.69926 1.32153 7.01182C1.63409 7.32438 2.05801 7.49998 2.50004 7.49998V7.49998ZM17.5 7.49998C17.9421 7.49998 18.366 7.32438 18.6786 7.01182C18.9911 6.69926 19.1667 6.27534 19.1667 5.83331C19.1667 5.39129 18.9911 4.96736 18.6786 4.6548C18.366 4.34224 17.9421 4.16665 17.5 4.16665C17.058 4.16665 16.6341 4.34224 16.3215 4.6548C16.009 4.96736 15.8334 5.39129 15.8334 5.83331C15.8334 6.27534 16.009 6.69926 16.3215 7.01182C16.6341 7.32438 17.058 7.49998 17.5 7.49998V7.49998ZM6.25004 13.75V15.4166C6.25004 15.925 5.94171 16.3666 5.50837 16.55C5.3499 16.6267 5.17612 16.6666 5.00004 16.6666H3.33337C2.64171 16.6666 2.08337 16.1083 2.08337 15.4166V13.75C2.08337 13.0583 2.64171 12.5 3.33337 12.5H5.00004C5.69171 12.5 6.25004 13.0583 6.25004 13.75ZM17.9167 13.75V15.4166C17.9167 16.1083 17.3584 16.6666 16.6667 16.6666H15C14.824 16.6666 14.6502 16.6267 14.4917 16.55C14.0584 16.3666 13.75 15.925 13.75 15.4166V13.75C13.75 13.0583 14.3084 12.5 15 12.5H16.6667C17.3584 12.5 17.9167 13.0583 17.9167 13.75ZM12.5 4.58331V7.08331C12.5 7.76665 11.9334 8.33331 11.25 8.33331H8.75004C8.06671 8.33331 7.50004 7.76665 7.50004 7.08331V4.58331C7.50004 3.89998 8.06671 3.33331 8.75004 3.33331H11.25C11.9334 3.33331 12.5 3.89998 12.5 4.58331Z"
                                    stroke="black"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.5 6.44165C14.475 7.44165 15.8333 9.59165 15.8333 12.0833C15.8333 12.225 15.825 12.3583 15.8083 12.5M4.19163 12.5C4.17496 12.3583 4.16663 12.225 4.16663 12.0833C4.16663 9.59165 5.52496 7.44165 7.49996 6.44165"
                                    stroke="black"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className="text">
                                М'яка іграшка Копиця Патріотичний Заєць, 32 см - тренд
                                2022 року серед жителів України, який завжди буде
                                наповнювати їх патріотичним духом.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default memo(ProductPage);