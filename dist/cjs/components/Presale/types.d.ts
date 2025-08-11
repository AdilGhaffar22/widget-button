/// <reference types="react" />
export interface PreSaleProps {
    title?: string;
    discountedPrice?: number;
    tokenSymbol?: string;
    onBuyCrypto?: () => void;
    onBuyCard?: () => void;
    onBankTransfer?: () => void;
    transactionsService?: any;
    tokenValues?: any;
    formatDisplayAmount?: (amount: number) => string;
    className?: string;
    theme?: 'light' | 'dark';
    buttonStyle?: string;
}
export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    disabled?: boolean;
}
export interface ModalProps {
    show: boolean;
    onHide: (show: boolean) => void;
    children: React.ReactNode;
    maxWidth?: string;
    className?: string;
    closeOnOverlayClick: boolean;
}
export interface TokenBalance {
    totalTokens: number;
}
