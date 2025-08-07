import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { render, screen } from '@testing-library/react';
import WidgetButton from '../WidgetButton';

// Mock the Dynamic SDK
jest.mock('@dynamic-labs/sdk-react-core', () => ({
	...jest.requireActual('@dynamic-labs/sdk-react-core'),
	useDynamicContext: () => ({
		user: null,
		setShowAuthFlow: jest.fn(),
		primaryWallet: {
			isConnected: true,
		},
	}),
	DynamicWidget: ({ innerButtonComponent }: any) => (
		<div data-testid="dynamic-widget">{innerButtonComponent}</div>
	),
}));

// Mock Button component
jest.mock('../Button/Button', () => {
	return function MockButton({ children, className }: any) {
		return <button className={className}>{children}</button>;
	};
});

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

describe('WidgetButton', () => {
	test('renders with default props', () => {
		renderWithProvider(<WidgetButton />);

		expect(screen.getByTestId('dynamic-widget')).toBeInTheDocument();
		expect(screen.getByText('Connect Wallet')).toBeInTheDocument();
	});

	test('renders with custom button text', () => {
		renderWithProvider(<WidgetButton buttonText="Custom Connect" />);

		expect(screen.getByText('Custom Connect')).toBeInTheDocument();
	});

	test('applies custom className', () => {
		const { container } = renderWithProvider(
			<WidgetButton className="custom-class" />,
		);

		expect(
			container.querySelector('.widget-button.custom-class'),
		).toBeInTheDocument();
	});

	test('passes correct className to Button component', () => {
		renderWithProvider(<WidgetButton />);

		const button = screen.getByText('Connect Wallet');
		expect(button).toHaveClass('AtConnect');
	});
});
