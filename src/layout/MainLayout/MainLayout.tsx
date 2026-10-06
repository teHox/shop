import { FC, ReactNode } from "react";
import Footer from "./components/Footer/Footer.tsx";
import { useMediaQuery } from "react-responsive";
import { mobileMediaWidth } from "../../constants/constants.ts";
import styles from "./styles.module.scss";
import ConsultationModal from "./components/ConsultationModal/ConsultationModal.tsx";
import BasketModal from "./components/BasketModal/BasketModal.tsx";
import Header from "./components/Header/Header.tsx";

type TypeMainLayout = {
    children: ReactNode;
};

const MainLayout: FC<TypeMainLayout> = ({ children }) => {
    const isMobile = useMediaQuery({
        query: mobileMediaWidth,
    });

    return (
        <div>
            <div className={styles.line}></div>
            <div className={styles.container}>
                {isMobile || <Header />}
                <ConsultationModal />
                <BasketModal />
                {children}
                {isMobile && <Footer />}
            </div>
        </div>
    );
};

export default MainLayout;
