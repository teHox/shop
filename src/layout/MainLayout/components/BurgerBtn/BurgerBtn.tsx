import clsx from "clsx";
import styles from "./styles.module.scss";
import { FC, MouseEventHandler } from "react";

type BurgerBtnProps = {
    burgerActive: boolean;
    handleChangeBurger: MouseEventHandler<HTMLDivElement> | undefined;
};

const BurgerBtn: FC<BurgerBtnProps> = ({ burgerActive, handleChangeBurger }) => {
    return (
        <div
            className={clsx(styles.burgerBtn, {
                [styles.burgerBtnActive]: burgerActive,
            })}
            onClick={handleChangeBurger}>
            <span></span>
        </div>
    );
};

export default BurgerBtn;
