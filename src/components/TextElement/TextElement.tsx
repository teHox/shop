import { FC } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { textTypes } from "../../constants/constants.ts";

type TextElementProps = {
    isMobile?: boolean;
    content: string;
    type?: string;
    className?: string;
};

const TextElement: FC<TextElementProps> = ({
    content,
    isMobile = false,
    type = textTypes.text,
    className,
}) => {
    return (
        <p
            className={clsx(
                {
                    [styles.textMobile]: isMobile,
                    [styles.text]: type === textTypes.text,
                    [styles.small]: type === textTypes.small,
                    [styles.medium]: type === textTypes.medium,
                    [styles.mediumMobile]: type === textTypes.medium && isMobile,
                    [styles.big]: type === textTypes.big,
                    [styles.bigMobile]: type === textTypes.big && isMobile,
                },
                className
            )}>
            {content}
        </p>
    );
};

export default TextElement;
