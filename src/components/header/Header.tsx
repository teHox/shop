import { Dispatch, FC, memo, SetStateAction } from "react";
import HeaderTop from "./HeaderTop.tsx";
import HeaderMenu from "./HeaderMenu.tsx";

type HeaderProps = {
    setIsVisibleConsultation: Dispatch<SetStateAction<boolean>>;
    setConsultationActive: Dispatch<SetStateAction<boolean>>;
    setBasketActive: Dispatch<SetStateAction<boolean>>;
    setIsVisibleBasket: Dispatch<SetStateAction<boolean>>;
};

const Header: FC<HeaderProps> = ({
    setConsultationActive,
    setIsVisibleConsultation,
    setBasketActive,
    setIsVisibleBasket,
}) => {
    return (
        <header className="header">
            <HeaderTop
                setConsultationActive={setConsultationActive}
                setIsVisibleConsultation={setIsVisibleConsultation}
                setBasketActive={setBasketActive}
                setIsVisibleBasket={setIsVisibleBasket}
            />
            <div className="header__bottom">
                <div className="header__event">
                    <svg
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 13C20.26 11.33 21 9.25 21 7C21 4.75 20.26 2.67 19 1M3 1C1.74 2.67 1 4.75 1 7C1 9.25 1.74 11.33 3 13M15.8 10.6C16.55 9.6 17 8.35 17 7C17 5.65 16.55 4.4 15.8 3.4M6.2 3.4C5.45 4.4 5 5.65 5 7C5 8.35 5.45 9.6 6.2 10.6M11 9C11.5304 9 12.0391 8.78929 12.4142 8.41421C12.7893 8.03914 13 7.53043 13 7C13 6.46957 12.7893 5.96086 12.4142 5.58579C12.0391 5.21071 11.5304 5 11 5C10.4696 5 9.96086 5.21071 9.58579 5.58579C9.21071 5.96086 9 6.46957 9 7C9 7.53043 9.21071 8.03914 9.58579 8.41421C9.96086 8.78929 10.4696 9 11 9Z"
                            stroke="#FFA0A0"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className="text pink">Акція</p>
                    <p className="text">- 50 % на всі іграшки у розділі "Плюшеві" ...</p>
                </div>
                <HeaderMenu />
            </div>
        </header>
    );
};

export default memo(Header);
