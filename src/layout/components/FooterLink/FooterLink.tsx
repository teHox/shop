import { NavLink } from "react-router-dom";
import { FooterLinkType } from "../../../constants/types.ts";
import { FC } from "react";
import styles from "./styles.module.scss";
import TextElement from "../../../components/TextElement/TextElement.tsx";
import clsx from "clsx";

type FooterLinkProps = {
    link: FooterLinkType;
};

const FooterLink: FC<FooterLinkProps> = ({ link }) => {
    return (
        <NavLink
            to={link.path}
            className={({ isActive }) =>
                clsx(styles.link, { [styles.linkActive]: isActive })
            }>
            <div className={clsx(styles.svg, styles[link.svg])}></div>
            <TextElement content={link.title} isMobile={true} />
        </NavLink>
    );
};

export default FooterLink;
