/// <reference types="react" />
export interface UsePreSaleOptions {
    transactionsService?: any;
    tokenValues?: any;
    onPaymentTypeChange?: (type: string) => void;
}
export declare const usePreSale: ({ transactionsService, tokenValues, onPaymentTypeChange, }?: UsePreSaleOptions) => {
    paymentType: string;
    setPaymentType: (type: string) => void;
    typeToSwitch: string;
    setTypeToSwitch: import("react").Dispatch<import("react").SetStateAction<string>>;
    prevBalance: number;
    setPrevBalance: import("react").Dispatch<import("react").SetStateAction<number>>;
    showModals: {
        others: boolean;
        top: boolean;
        walletConfirmation: boolean;
    };
    updateModal: (modalName: "top" | "walletConfirmation" | "others", value: boolean) => void;
    resetPaymentFlow: () => void;
};
