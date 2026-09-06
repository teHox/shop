import { Dispatch, FC, SetStateAction } from "react";
import HeaderTop from "../HeaderTop/HeaderTop.tsx";
import HeaderMenu from "../HeaderMenu/HeaderMenu.tsx";
import HeaderEventSvg from "./svg/HeaderEventSvg.tsx";
import styles from "./styles.module.scss";
import TextElement from "../TextElement/TextElement.tsx";

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
        <header className={styles.header}>
            <HeaderTop
                setConsultationActive={setConsultationActive}
                setIsVisibleConsultation={setIsVisibleConsultation}
                setBasketActive={setBasketActive}
                setIsVisibleBasket={setIsVisibleBasket}
            />
            <div className={styles.bottom}>
                <div className={styles.event}>
                    <HeaderEventSvg />
                    <TextElement content={"Акція"} className={"pink"} />
                    <TextElement
                        content={'- 50 % на всі іграшки у розділі "Плюшеві" ...'}
                    />
                </div>
                <HeaderMenu />
            </div>
        </header>
    );
};

export default Header;
