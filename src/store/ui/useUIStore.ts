import { create } from "zustand/react";

interface UIStoreState {
    isMenuOpen: boolean;
    isBasketModalActive: boolean;
    setIsBasketModalActive: (value: boolean) => void;
    isConsultationModalActive: boolean;
    setIsConsultationModalActive: (value: boolean) => void;
}

export const useUIStore = create<UIStoreState>()((set) => ({
    isMenuOpen: true,
    isBasketModalActive: false,
    isConsultationModalActive: false,
    setIsBasketModalActive: (value: boolean) => set({ isBasketModalActive: value }),
    setIsConsultationModalActive: (value: boolean) =>
        set({ isConsultationModalActive: value }),
}));
