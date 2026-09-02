import { FC } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";

type TextElementProps = {
    isMobile?: boolean;
    content: string;
};

const TextElement: FC<TextElementProps> = ({ content, isMobile = false }) => {
    return (
        <p className={clsx(styles.text, { [styles.textMobile]: isMobile })}>{content}</p>
    );
};

export default TextElement;
