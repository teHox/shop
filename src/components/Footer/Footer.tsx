import { FC } from "react";
import FooterLink from "../FooterLink/FooterLink.tsx";
import styles from "./styles.module.scss";
import { footerLinks } from "../../constants/constants.ts";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <FooterLink link={footerLinks[0]} />
                <div className={styles.content}>
                    {footerLinks.slice(1, -1).map((link) => (
                        <FooterLink link={link} />
                    ))}
                </div>
                <FooterLink link={footerLinks[footerLinks.length - 1]} />
            </div>
        </footer>
    );
};

export default Footer;
