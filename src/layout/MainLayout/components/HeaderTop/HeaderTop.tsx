import { Dispatch, FC, SetStateAction } from "react";
import HeaderPhoneSvg from "../../svg/HeaderPhoneSvg.tsx";
import HeaderBasketSvg from "../../svg/HeaderBasketSvg.tsx";
import HeaderInfoSvg from "../../svg/HeaderInfoSvg.tsx";
import HeaderSearch from "../HeaderSearch/HeaderSearch.tsx";

import styles from "./style.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../../../constants/constants.ts";

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
        <div className={styles.wrapper}>
            <HeaderSearch />
            <div className={styles.modals}>
                <div className={styles.contact} onClick={handleChangeConsultation}>
                    <HeaderPhoneSvg />
                    <TextElement content={"Зв'язатися з нами"} />
                </div>
                <div className={styles.basket} onClick={handleChangeBasket}>
                    <HeaderBasketSvg />
                    <TextElement content={"Твій кошик"} />
                    <div className={styles.counts}>
                        <HeaderInfoSvg />
                        <TextElement
                            content={"2"}
                            type={textTypes.small}
                            className={styles.count}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
