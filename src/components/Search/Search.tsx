import styles from "./styles.module.scss";

const Search = () => {
    return (
        <input
            type="search"
            className={styles.searchMobile}
            name="seacrh-mobile"
            placeholder="Пошук ..."
        />
    );
};

export default Search;
