import { FC, memo } from "react";

const Banner: FC = () => {
    return (
        <div className="banner">
            <div className="banner__item">
                <img src="img/banner__big.png" alt="" />
                <div className="banner__description">
                    <h1 className="title">ПЛЮШЕВИЙ ВЕДМІДЬ "Єгор"</h1>
                    <button className="banner__button text">ПРИДБАТИ ЗАРАЗ</button>
                </div>
            </div>
            <div className="banner__item">
                <div className="banner__description">
                    <span className="big-mobile">ПЛЮШЕВИЙ ВЕДМІДЬ "Ігор"</span>
                    <p className="text">
                        Це іграшка, яка не залишить байдужими як малюків,так і їхніх
                        батьків.
                    </p>
                </div>
                <img src="img/banner__small.png" alt="" />
            </div>
            <div className="banner__item">
                <div className="banner__description">
                    <span className="big-mobile">ПЛЮШЕВИЙ ВЕДМІДЬ "Ігор"</span>
                    <p className="text">
                        Це іграшка, яка не залишить байдужими як малюків,так і їхніх
                        батьків.
                    </p>
                </div>
                <img src="img/banner__small.png" alt="" />
            </div>
            <div className="recomendation">
                <div className="recomendation__title">
                    <div className="recomendation__line"></div>
                    <span className="text">Р е к о м е н д а ц і ї</span>
                </div>
                <div className="recomendation__content">
                    <img
                        src="img/banner__recomendation.png"
                        alt=""
                        className="recomendation__img"
                    />
                    <div className="recomendation__price">
                        <p className="recomendation__price_old text">915 ₴</p>
                        <p className="recomendation__price_new big">515 ₴</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Banner);
