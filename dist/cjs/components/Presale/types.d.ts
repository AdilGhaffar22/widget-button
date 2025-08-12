/// <reference types="react" />
export interface PreSaleProps {
    title?: string;
    description?: string;
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
    buttonStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    container?: React.CSSProperties;
    modalStyle?: React.CSSProperties;
    hrefStyle?: React.CSSProperties;
    tokenImage?: string;
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
