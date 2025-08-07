import React, { createContext, ReactNode, useContext, useReducer } from 'react';

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

type PreSaleAction =
	| { type: 'SET_PAYMENT_TYPE'; payload: string }
	| { type: 'SET_TYPE_TO_SWITCH'; payload: string }
	| { type: 'SET_PREV_BALANCE'; payload: number }
	| {
			type: 'TOGGLE_MODAL';
			payload: { modal: keyof PreSaleState['modals']; show: boolean };
	  }
	| { type: 'SET_LOADING'; payload: boolean }
	| { type: 'SET_ERROR'; payload: string | null }
	| { type: 'RESET_STATE' };

const initialState: PreSaleState = {
	paymentType: '',
	typeToSwitch: '',
	prevBalance: 0,
	modals: {
		others: false,
		top: false,
		walletConfirmation: false,
	},
	isLoading: false,
	error: null,
};

const presaleReducer = (
	state: PreSaleState,
	action: PreSaleAction,
): PreSaleState => {
	switch (action.type) {
		case 'SET_PAYMENT_TYPE':
			return { ...state, paymentType: action.payload };
		case 'SET_TYPE_TO_SWITCH':
			return { ...state, typeToSwitch: action.payload };
		case 'SET_PREV_BALANCE':
			return { ...state, prevBalance: action.payload };
		case 'TOGGLE_MODAL':
			return {
				...state,
				modals: {
					...state.modals,
					[action.payload.modal]: action.payload.show,
				},
			};
		case 'SET_LOADING':
			return { ...state, isLoading: action.payload };
		case 'SET_ERROR':
			return { ...state, error: action.payload };
		case 'RESET_STATE':
			return initialState;
		default:
			return state;
	}
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

const PreSaleContext = createContext<PreSaleContextType | undefined>(undefined);

interface PreSaleProviderProps {
	children: ReactNode;
}

export const PreSaleProvider: React.FC<PreSaleProviderProps> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(presaleReducer, initialState);

	const actions = {
		setPaymentType: (type: string) =>
			dispatch({ type: 'SET_PAYMENT_TYPE', payload: type }),
		setTypeToSwitch: (type: string) =>
			dispatch({ type: 'SET_TYPE_TO_SWITCH', payload: type }),
		setPrevBalance: (balance: number) =>
			dispatch({ type: 'SET_PREV_BALANCE', payload: balance }),
		toggleModal: (modal: keyof PreSaleState['modals'], show: boolean) =>
			dispatch({ type: 'TOGGLE_MODAL', payload: { modal, show } }),
		setLoading: (loading: boolean) =>
			dispatch({ type: 'SET_LOADING', payload: loading }),
		setError: (error: string | null) =>
			dispatch({ type: 'SET_ERROR', payload: error }),
		resetState: () => dispatch({ type: 'RESET_STATE' }),
	};

	return (
		<PreSaleContext.Provider value={{ state, dispatch, actions }}>
			{children}
		</PreSaleContext.Provider>
	);
};

export const usePreSaleContext = (): PreSaleContextType => {
	const context = useContext(PreSaleContext);
	if (context === undefined) {
		throw new Error('usePreSaleContext must be used within a PreSaleProvider');
	}
	return context;
};
