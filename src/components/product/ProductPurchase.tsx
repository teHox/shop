import { FC, memo } from "react";

const ProductPurchase: FC = () => {
    return (
        <div className="product__purchase">
            <h2 className="medium-mobile">
                М'яка іграшка копіца патріотичний заєць #09392881
            </h2>
            <div className="product__price">
                <div className="product__price_old medium">915 ₴</div>
                <div className="product__price_new title">515 ₴</div>
            </div>
            <button className="product__button">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.24998 6.39168V5.58334C6.24998 3.70834 7.75831 1.86668 9.63331 1.69168C10.1543 1.64049 10.6802 1.69895 11.1772 1.86329C11.6743 2.02763 12.1314 2.29421 12.5191 2.64588C12.9069 2.99755 13.2168 3.42651 13.4288 3.90515C13.6407 4.3838 13.7502 4.90152 13.75 5.42501V6.57501M7.49998 18.3333H12.5C15.85 18.3333 16.45 16.9917 16.625 15.3583L17.25 10.3583C17.475 8.32501 16.8916 6.66668 13.3333 6.66668H6.66664C3.10831 6.66668 2.52498 8.32501 2.74998 10.3583L3.37498 15.3583C3.54998 16.9917 4.14998 18.3333 7.49998 18.3333Z"
                        stroke="#FAF7F0"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.9126 10H12.9209M7.07922 10H7.08589"
                        stroke="#FAF7F0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <p className="text">Придбати</p>
            </button>
        </div>
    );
};

export default memo(ProductPurchase);
