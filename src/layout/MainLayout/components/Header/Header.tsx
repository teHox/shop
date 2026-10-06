import { FC } from "react";
import HeaderTop from "../HeaderTop/HeaderTop.tsx";
import HeaderMenu from "../HeaderMenu/HeaderMenu.tsx";
import HeaderEventSvg from "../../svg/HeaderEventSvg.tsx";
import styles from "./styles.module.scss";
import TextElement from "../../../../components/TextElement/TextElement.tsx";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <HeaderTop />
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
