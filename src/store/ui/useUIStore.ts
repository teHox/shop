import { create } from "zustand/react";

interface UIStoreState {
    isMenuActive: boolean;
    setIsMenuActive: (value: boolean) => void;
    isBasketModalActive: boolean;
    setIsBasketModalActive: (value: boolean) => void;
    isConsultationModalActive: boolean;
    setIsConsultationModalActive: (value: boolean) => void;
}

export const useUIStore = create<UIStoreState>()((set) => ({
    isMenuActive: false,
    setIsMenuActive: (value: boolean) => set({ isMenuActive: value }),
    isBasketModalActive: false,
    setIsBasketModalActive: (value: boolean) => set({ isBasketModalActive: value }),
    isConsultationModalActive: false,
    setIsConsultationModalActive: (value: boolean) =>
        set({ isConsultationModalActive: value }),
}));
