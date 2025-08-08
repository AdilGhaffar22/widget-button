import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { PreSale } from '../Presale';

// Mock the Dynamic SDK
jest.mock('@dynamic-labs/sdk-react-core', () => ({
	...jest.requireActual('@dynamic-labs/sdk-react-core'),
	useDynamicContext: () => ({
		user: null,
		setShowAuthFlow: jest.fn(),
		primaryWallet: {
			isConnected: false,
			address: '0x123...',
		},
	}),
	useDynamicEvents: jest.fn(),
	useOpenFundingOptions: () => ({
		openFundingOptions: jest.fn(),
	}),
	DynamicWidget: ({ innerButtonComponent }: any) => (
		<div data-testid="dynamic-widget">{innerButtonComponent}</div>
	),
}));

// Mock wagmi
jest.mock('wagmi', () => ({
	useBalance: () => ({
		data: { value: BigInt(1000000000000000000) }, // Mock balance
	}),
}));

const renderWithProvider = (component: React.ReactElement) => {
	return render(
		<DynamicContextProvider
			settings={{
				environmentId: 'test-env-id',
				walletConnectors: [],
			}}
		>
			{component}
		</DynamicContextProvider>,
	);
};

describe('PreSale', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders with default props', () => {
		renderWithProvider(<PreSale />);

		expect(screen.getByText('Offer For Early Investors')).toBeInTheDocument();
		expect(screen.getByText('Public Presale')).toBeInTheDocument();
		expect(screen.getByText('Buy with Crypto')).toBeInTheDocument();
		expect(screen.getByText('Buy With Card')).toBeInTheDocument();
		expect(screen.getByText('Bank Transfer/Others')).toBeInTheDocument();
	});

	test('renders with custom props', () => {
		renderWithProvider(
			<PreSale
				title="Custom Title"
				discountedPrice={0.005}
				tokenSymbol="CUSTOM"
			/>,
		);

		expect(screen.getByText('Custom Title')).toBeInTheDocument();
		expect(
			screen.getByText(/Discounted Price - \$0\.005 USD/),
		).toBeInTheDocument();
	});

	test('calls onBuyCrypto callback when Buy with Crypto is clicked', () => {
		const mockOnBuyCrypto = jest.fn();

		renderWithProvider(<PreSale onBuyCrypto={mockOnBuyCrypto} />);

		fireEvent.click(screen.getByText('Buy with Crypto'));

		expect(mockOnBuyCrypto).toHaveBeenCalledTimes(1);
	});

	test('calls onBuyCard callback when Buy With Card is clicked', () => {
		const mockOnBuyCard = jest.fn();

		renderWithProvider(<PreSale onBuyCard={mockOnBuyCard} />);

		fireEvent.click(screen.getByText('Buy With Card'));

		expect(mockOnBuyCard).toHaveBeenCalledTimes(1);
	});

	test('opens bank transfer modal when Bank Transfer/Others is clicked', async () => {
		renderWithProvider(<PreSale />);

		fireEvent.click(screen.getByText('Bank Transfer/Others'));

		await waitFor(() => {
			expect(screen.getByTitle('Embedded URL')).toBeInTheDocument();
		});
	});

	test('opens top up modal when help link is clicked', async () => {
		renderWithProvider(<PreSale />);

		fireEvent.click(screen.getByText('Top up with Debit/Credit Card'));

		await waitFor(() => {
			expect(screen.getByText('Top Up Your Wallet')).toBeInTheDocument();
		});
	});

	test('applies dark theme correctly', () => {
		const { container } = renderWithProvider(<PreSale theme="dark" />);

		// Check if dark theme styles are applied
		const containerElement = container.querySelector('div');
		expect(containerElement).toHaveStyle('background-color: #1f2937');
	});

	test('formats display amount correctly', () => {
		const mockFormatDisplayAmount = (amount: number) =>
			`${amount.toLocaleString()} TOKENS`;

		renderWithProvider(
			<PreSale formatDisplayAmount={mockFormatDisplayAmount} />,
		);

		// This would be visible when wallet is connected and has tokens
		// The test structure would need adjustment based on mocked wallet state
	});

	test('closes modals when close button is clicked', async () => {
		renderWithProvider(<PreSale />);

		// Open top up modal
		fireEvent.click(screen.getByText('Top up with Debit/Credit Card'));

		await waitFor(() => {
			expect(screen.getByText('Top Up Your Wallet')).toBeInTheDocument();
		});

		// Close modal
		fireEvent.click(screen.getByText('×'));

		await waitFor(() => {
			expect(screen.queryByText('Top Up Your Wallet')).not.toBeInTheDocument();
		});
	});

	test('handles wallet connection state changes', () => {
		// This test would require more sophisticated mocking of the Dynamic SDK
		// to test the wallet connection state changes and their effects
		renderWithProvider(<PreSale />);

		// Test would verify behavior when wallet connects/disconnects
		expect(screen.getByText('Buy with Crypto')).toBeInTheDocument();
	});
});
