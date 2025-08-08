import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, WagmiProvider } from 'wagmi';
import { supportedChains, transports } from '../components/chains';
// import { config } from '../components/wagmiConfig';
import { PreSale } from '../Presale';
import type { PreSaleProps } from '../types';

// adjust path
const queryClient = new QueryClient();

export const config = createConfig({
	multiInjectedProviderDiscovery: false,
	chains: supportedChains,
	ssr: true,
	transports: transports,
});

const meta: Meta<typeof PreSale> = {
	title: 'Components/PreSale',
	component: PreSale,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'A complete PreSale component with wallet integration and payment options',
			},
		},
	},
	decorators: [
		(Story) => (
			<QueryClientProvider client={queryClient}>
				<WagmiProvider config={config}>
					<DynamicContextProvider
						settings={{
							environmentId: 'your-environment-id',
							walletConnectors: [],
						}}
					>
						<div
							style={{
								padding: '20px',
								minHeight: '100vh',
								backgroundColor: '#f9fafb',
							}}
						>
							<Story />
						</div>
					</DynamicContextProvider>
				</WagmiProvider>
			</QueryClientProvider>
		),
	],
};

export default meta;
type Story = StoryObj<PreSaleProps>;

export const Default: Story = {
	args: {
		title: 'Offer For Early Investors',
		discountedPrice: 0.003,
		tokenSymbol: 'TEMOC',
	},
};

// export const DarkTheme: Story = {
// 	args: {
// 		title: 'Exclusive PreSale Offer',
// 		discountedPrice: 0.005,
// 		tokenSymbol: 'TOKEN',
// 		theme: 'dark',
// 	},
// 	decorators: [
// 		(Story) => (
// 			<DynamicContextProvider
// 				settings={{
// 					environmentId: 'your-environment-id',
// 					walletConnectors: [],
// 				}}
// 			>
// 				<div
// 					style={{
// 						padding: '20px',
// 						minHeight: '100vh',
// 						backgroundColor: '#111827',
// 					}}
// 				>
// 					<Story />
// 				</div>
// 			</DynamicContextProvider>
// 		),
// 	],
// };

// export const CustomCallbacks: Story = {
// 	args: {
// 		title: 'Custom PreSale Component',
// 		discountedPrice: 0.004,
// 		tokenSymbol: 'CUSTOM',
// 		onBuyCrypto: () => console.log('Buy with crypto clicked'),
// 		onBuyCard: () => console.log('Buy with card clicked'),
// 		onBankTransfer: () => console.log('Bank transfer clicked'),
// 		formatDisplayAmount: (amount: number) =>
// 			`${amount.toLocaleString()} tokens`,
// 	},
// };
