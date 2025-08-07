import { useCallback, useState } from 'react';

export interface UsePreSaleOptions {
	transactionsService?: any;
	tokenValues?: any;
	onPaymentTypeChange?: (type: string) => void;
}

export const usePreSale = ({
	transactionsService,
	tokenValues,
	onPaymentTypeChange,
}: UsePreSaleOptions = {}) => {
	const [paymentType, setPaymentType] = useState('');
	const [typeToSwitch, setTypeToSwitch] = useState('');
	const [prevBalance, setPrevBalance] = useState(0);
	const [showModals, setShowModals] = useState({
		others: false,
		top: false,
		walletConfirmation: false,
	});

	const updateModal = useCallback(
		(modalName: keyof typeof showModals, value: boolean) => {
			setShowModals((prev) => ({
				...prev,
				[modalName]: value,
			}));
		},
		[],
	);

	const handlePaymentTypeChange = useCallback(
		(type: string) => {
			setPaymentType(type);
			if (onPaymentTypeChange) {
				onPaymentTypeChange(type);
			}
		},
		[onPaymentTypeChange],
	);

	const resetPaymentFlow = useCallback(() => {
		setPaymentType('');
		setTypeToSwitch('');
		setShowModals({
			others: false,
			top: false,
			walletConfirmation: false,
		});
	}, []);

	return {
		paymentType,
		setPaymentType: handlePaymentTypeChange,
		typeToSwitch,
		setTypeToSwitch,
		prevBalance,
		setPrevBalance,
		showModals,
		updateModal,
		resetPaymentFlow,
	};
};
