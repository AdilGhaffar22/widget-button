export const formatDisplayAmount = (
	amount: number,
	decimals: number = 0,
): string => {
	if (!amount) return '0';

	if (amount >= 1000000) {
		return `${(amount / 1000000).toFixed(decimals)}M`;
	}

	if (amount >= 1000) {
		return `${(amount / 1000).toFixed(decimals)}K`;
	}

	return amount.toLocaleString();
};

export const formatPrice = (
	price: number,
	currency: string = 'USD',
): string => {
	return `$${price} ${currency}`;
};

export const calculatePercentage = (sold: number, total: number): number => {
	if (total === 0) return 0;
	return Number(((sold / total) * 100).toFixed(2));
};

export const truncateAddress = (
	address: string,
	start: number = 6,
	end: number = 4,
): string => {
	if (!address) return '';
	if (address.length <= start + end) return address;
	return `${address.slice(0, start)}...${address.slice(-end)}`;
};
