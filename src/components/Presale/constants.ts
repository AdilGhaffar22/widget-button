export const PRESALE_THEMES = {
	light: {
		background: '#ffffff',
		text: '#000000',
		primary: '#c9fa49',
		secondary: '#f3f4f6',
	},
	dark: {
		background: '#1f2937',
		text: '#ffffff',
		primary: '#c9fa49',
		secondary: '#374151',
	},
};

export const BUTTON_VARIANTS = {
	primary: {
		backgroundColor: '#c9fa49',
		color: '#333333',
		hoverBackgroundColor: '#b8e63a',
	},
	secondary: {
		backgroundColor: '#f3f4f6',
		color: '#374151',
		hoverBackgroundColor: '#e5e7eb',
	},
	outline: {
		backgroundColor: 'transparent',
		color: '#c9fa49',
		border: '2px solid #c9fa49',
		hoverBackgroundColor: '#c9fa49',
		hoverColor: '#333333',
	},
};

export const MODAL_SIZES = {
	small: '400px',
	medium: '580px',
	large: '800px',
};

export const PAYMENT_TYPES = {
	CRYPTO: 'Crypto',
	CARD: 'Card',
	BANK: 'Bank',
} as const;

export const DEFAULT_TOKEN_VALUES = {
	price: 0.003,
	totalAmount: 1000000000,
	symbol: 'TOKEN',
};
