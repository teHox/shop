import { FC } from "react";
import HeaderPhoneSvg from "../../svg/HeaderPhoneSvg.tsx";
import HeaderBasketSvg from "../../svg/HeaderBasketSvg.tsx";
import HeaderInfoSvg from "../../svg/HeaderInfoSvg.tsx";
import HeaderSearch from "../HeaderSearch/HeaderSearch.tsx";
import TextElement from "../../../../components/TextElement/TextElement.tsx";
import { textTypes } from "../../../../constants/constants.ts";
import { useUIStore } from "../../../../store/ui/useUIStore.ts";
import styles from "./style.module.scss";

const HeaderTop: FC = () => {
    const { setIsBasketModalActive, setIsConsultationModalActive } = useUIStore();

    return (
        <div className={styles.wrapper}>
            <HeaderSearch />
            <div className={styles.modals}>
                <div
                    className={styles.contact}
                    onClick={() => setIsConsultationModalActive(true)}>
                    <HeaderPhoneSvg />
                    <TextElement content={"Зв'язатися з нами"} />
                </div>
                <div
                    className={styles.basket}
                    onClick={() => setIsBasketModalActive(true)}>
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
