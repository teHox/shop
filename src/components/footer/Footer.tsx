import { FC, memo } from "react";
import { NavLink } from "react-router-dom";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "footer__link footer__link_active" : "footer__link"
                    }>
                    <div className="footer__svg-home footer__svg"></div>
                    <p className="text-mobile">Головна</p>
                </NavLink>
                <div className="footer__content">
                    <NavLink
                        to="/consultation"
                        className={({ isActive }) =>
                            isActive ? "footer__link footer__link_active" : "footer__link"
                        }>
                        <div className="footer__svg-contact footer__svg"></div>
                        <p className="text-mobile">Зв`язок</p>
                    </NavLink>
                    <NavLink
                        to="/basket"
                        className={({ isActive }) =>
                            isActive ? "footer__link footer__link_active" : "footer__link"
                        }>
                        <div className="footer__svg-basket footer__svg"></div>
                        <p className="text-mobile">Кошик</p>
                    </NavLink>
                    <NavLink
                        to="/catalog"
                        className={({ isActive }) =>
                            isActive ? "footer__link footer__link_active" : "footer__link"
                        }>
                        <div className="footer__svg-catalog footer__svg"></div>
                        <p className="text-mobile">Каталог</p>
                    </NavLink>
                </div>
                <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                        isActive ? "footer__link footer__link_active" : "footer__link"
                    }>
                    <div className="footer__svg-more footer__svg"></div>
                    <p className="text-mobile">Більше</p>
                </NavLink>
            </div>
        </footer>
    );
};

export default memo(Footer);
