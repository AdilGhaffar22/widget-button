import React, { ReactNode } from 'react';
interface PreSaleState {
    paymentType: string;
    typeToSwitch: string;
    prevBalance: number;
    modals: {
        others: boolean;
        top: boolean;
        walletConfirmation: boolean;
    };
    isLoading: boolean;
    error: string | null;
}
type PreSaleAction = {
    type: 'SET_PAYMENT_TYPE';
    payload: string;
} | {
    type: 'SET_TYPE_TO_SWITCH';
    payload: string;
} | {
    type: 'SET_PREV_BALANCE';
    payload: number;
} | {
    type: 'TOGGLE_MODAL';
    payload: {
        modal: keyof PreSaleState['modals'];
        show: boolean;
    };
} | {
    type: 'SET_LOADING';
    payload: boolean;
} | {
    type: 'SET_ERROR';
    payload: string | null;
} | {
    type: 'RESET_STATE';
};
interface PreSaleContextType {
    state: PreSaleState;
    dispatch: React.Dispatch<PreSaleAction>;
    actions: {
        setPaymentType: (type: string) => void;
        setTypeToSwitch: (type: string) => void;
        setPrevBalance: (balance: number) => void;
        toggleModal: (modal: keyof PreSaleState['modals'], show: boolean) => void;
        setLoading: (loading: boolean) => void;
        setError: (error: string | null) => void;
        resetState: () => void;
    };
}
interface PreSaleProviderProps {
    children: ReactNode;
}
export declare const PreSaleProvider: React.FC<PreSaleProviderProps>;
export declare const usePreSaleContext: () => PreSaleContextType;
export {};
