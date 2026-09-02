const Recommendation = () => {
    return (
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
    );
};

export default Recommendation;
