import { FC, ReactNode, useState } from "react";
import Header from "../components/header/Header.tsx";
import PopupConsultation from "../components/popups/PopupConsultation.tsx";
import PopupBasket from "../components/popups/PopupBasket.tsx";
import Footer from "../components/footer/Footer.tsx";
import { useMediaQuery } from "react-responsive";

type TypeMainLayout = {
    children: ReactNode;
};

const MainLayout: FC<TypeMainLayout> = ({ children }) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });
    const [consultationActive, setConsultationActive] = useState(false);
    const [basketActive, setBasketActive] = useState(false);
    const [isVisibleConsultation, setIsVisibleConsultation] = useState(false);
    const [isVisibleBasket, setIsVisibleBasket] = useState(false);

    return (
        <div>
            <div className="line"></div>
            <div className="container">
                {isMobile || (
                    <Header
                        setConsultationActive={setConsultationActive}
                        setIsVisibleConsultation={setIsVisibleConsultation}
                        setIsVisibleBasket={setIsVisibleBasket}
                        setBasketActive={setBasketActive}
                    />
                )}
                <PopupConsultation
                    isVisible={isVisibleConsultation}
                    setIsVisible={setIsVisibleConsultation}
                    consultationActive={consultationActive}
                    setConsultationActive={setConsultationActive}
                />
                <PopupBasket
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
