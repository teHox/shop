import { FC, memo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderMenu: FC = () => {
    const location = useLocation();
    const [burgerActive, setBurgerActive] = useState(location.pathname === "/");

    const handleChangeBurger = () => {
        setBurgerActive((prevState) => !prevState);
    };

    return (
        <nav className="header__menu">
            <ul>
                <li>
                    <Link to="/about-us" className="header__link text text_hover">
                        Про нас
                    </Link>
                </li>
                <li>
                    <Link to="/" className="header__link text text_hover">
                        Головна
                    </Link>
                </li>
            </ul>
            <div className="header__category">
                <p className="text">Наші Категорії</p>
                <div
                    className={
                        burgerActive ? "burger-btn burger-btn_active" : "burger-btn"
                    }
                    onClick={handleChangeBurger}>
                    <span></span>
                </div>
                <div
                    className={
                        burgerActive
                            ? "header__content header__content_active"
                            : "header__content"
                    }>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                    <a href="" className="header__item">
                        <div className="header__circle"></div>
                        <p className="text">Інтерактивні</p>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default memo(HeaderMenu);
