import { FC, ReactNode, useState } from "react";
import Footer from "../components/Footer/Footer.tsx";
import { useMediaQuery } from "react-responsive";
import { mobileMediaWidth } from "../constants/constants.ts";
import styles from "./styles.module.scss";
import ConsultationModal from "./components/ConsultationModal/ConsultationModal.tsx";
import BasketModal from "./components/BasketModal/BasketModal.tsx";
import Header from "../components/Header/Header.tsx";

type TypeMainLayout = {
    children: ReactNode;
};

const MainLayout: FC<TypeMainLayout> = ({ children }) => {
    const isMobile = useMediaQuery({
        query: mobileMediaWidth,
    });
    const [consultationActive, setConsultationActive] = useState(false);
    const [basketActive, setBasketActive] = useState(false);
    const [isVisibleConsultation, setIsVisibleConsultation] = useState(false);
    const [isVisibleBasket, setIsVisibleBasket] = useState(false);

    return (
        <div>
            <div className={styles.line}></div>
            <div className={styles.container}>
                {isMobile || (
                    <Header
                        setConsultationActive={setConsultationActive}
                        setIsVisibleConsultation={setIsVisibleConsultation}
                        setIsVisibleBasket={setIsVisibleBasket}
                        setBasketActive={setBasketActive}
                    />
                )}
                <ConsultationModal
                    isVisible={isVisibleConsultation}
                    setIsVisible={setIsVisibleConsultation}
                    consultationActive={consultationActive}
                    setConsultationActive={setConsultationActive}
                />
                <BasketModal
                    isVisible={isVisibleBasket}
                    setIsVisible={setIsVisibleBasket}
                    basketActive={basketActive}
                    setBasketActive={setBasketActive}
                />
                {children}
                {isMobile && <Footer />}
            </div>
        </div>
    );
};

export default MainLayout;
