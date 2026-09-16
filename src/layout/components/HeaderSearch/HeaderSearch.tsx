import HeaderSearchSvg from "../HeaderTop/svg/HeaderSearchSvg.tsx";
import styles from "./styles.module.scss";

const HeaderSearch = () => {
    return (
        <div className={styles.search}>
            <HeaderSearchSvg />
            <input type="search" name="" id="" />
            <button></button>
        </div>
    );
};

export default HeaderSearch;
