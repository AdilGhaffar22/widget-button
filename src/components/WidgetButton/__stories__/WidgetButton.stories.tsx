import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import type { Meta, StoryObj } from '@storybook/react';
import {WidgetButton} from '../WidgetButton';
import type { WidgetButtonProps } from '../WidgetButton';

const cssOverrides = `
	.button--padding-small {	
		padding: .75rem 2rem !important;
		font-size: 16px !important;
		font-weight:700 !important
		color: #000 !important;
		background-color: #C9FA49 !important;
		border-radius: 9999px !important;
	}
`;

const meta: Meta<typeof WidgetButton> = {
	title: 'Components/WidgetButton',
	component: WidgetButton,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<DynamicContextProvider
				settings={{
					environmentId: '76703363-73c0-4763-ac6a-9c2b933ab7de',
					walletConnectors: [EthereumWalletConnectors],
					cssOverrides,
				}}
			>
				<Story />
			</DynamicContextProvider>
		),
	],
};

export default meta;

type Story = StoryObj<WidgetButtonProps>;

export const Default: Story = {
	args: {
		buttonText: 'Click Me',
	},
};
