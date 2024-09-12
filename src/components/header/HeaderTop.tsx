import { Dispatch, FC, memo, SetStateAction } from "react";

type HeaderTopProps = {
    setIsVisibleConsultation: Dispatch<SetStateAction<boolean>>;
    setConsultationActive: Dispatch<SetStateAction<boolean>>;
    setBasketActive: Dispatch<SetStateAction<boolean>>;
    setIsVisibleBasket: Dispatch<SetStateAction<boolean>>;
};

const HeaderTop: FC<HeaderTopProps> = ({
    setConsultationActive,
    setIsVisibleConsultation,
    setBasketActive,
    setIsVisibleBasket,
}) => {
    const handleChangeConsultation = () => {
        setConsultationActive((prev) => !prev);
        setIsVisibleConsultation(true);
    };

    const handleChangeBasket = () => {
        setBasketActive((prev) => !prev);
        setIsVisibleBasket(true);
    };

    return (
        <div className="header__top">
            <div className="header__search">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13 4H19M13 7H16M20 10.5C20 15.75 15.75 20 10.5 20C5.25 20 1 15.75 1 10.5C1 5.25 5.25 1 10.5 1M21 21L19 19"
                        stroke="#98A8F8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <input type="search" name="" id="" />
                <button></button>
            </div>
            <div className="header__modals">
                <div className="header__contact" onClick={handleChangeConsultation}>
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.58811 17.4401 7.49169 16.5041 6.47 15.49C5.45877 14.472 4.5261 13.3789 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33V17.33Z"
                            stroke="#98A8F8"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                        />
                        <path
                            d="M14 4.97L16 6.97L20 2.97"
                            stroke="#98A8F8"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className="text">Зв'язатися з нами</p>
                </div>
                <div className="header__basket" onClick={handleChangeBasket}>
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.81 1L4.19 4.63M14.19 1L17.81 4.63"
                            stroke="#98A8F8"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1 6.84998C1 4.99998 1.99 4.84998 3.22 4.84998H18.78C20.01 4.84998 21 4.99998 21 6.84998C21 8.99998 20.01 8.84998 18.78 8.84998H3.22C1.99 8.84998 1 8.99998 1 6.84998Z"
                            stroke="#98A8F8"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M8.76 13V16.55M13.36 13V16.55M2.5 9L3.91 17.64C4.23 19.58 5 21 7.86 21H13.89C17 21 17.46 19.64 17.82 17.76L19.5 9"
                            stroke="#98A8F8"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="text">Твій кошик</div>
                    <div className="header__counts">
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_10_84)">
                                <path
                                    d="M4.99998 3.33334V5.41668M4.99998 9.16668C7.29165 9.16668 9.16665 7.29168 9.16665 5.00001C9.16665 2.70834 7.29165 0.833344 4.99998 0.833344C2.70831 0.833344 0.833313 2.70834 0.833313 5.00001C0.833313 7.29168 2.70831 9.16668 4.99998 9.16668Z"
                                    stroke="#FFA0A0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.99792 6.66666H5.00167"
                                    stroke="#FFA0A0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_10_84">
                                    <rect width="10" height="10" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="small">2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(HeaderTop);
