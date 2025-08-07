# PreSale React Package

A comprehensive, customizable PreSale React component with wallet integration using Dynamic SDK and styled with Emotion.

## Features

- 🔗 **Wallet Integration** - Built-in support for Dynamic SDK
- 🎨 **Emotion Styling** - No Tailwind dependency, pure CSS-in-JS
- 📱 **Responsive Design** - Works on all device sizes
- ♿ **Accessible** - Full keyboard navigation and screen reader support
- 🧪 **Well Tested** - Comprehensive test suite included
- 📖 **Storybook Ready** - Complete documentation and examples
- 🎯 **TypeScript** - Full type safety
- 🎨 **Themeable** - Light/dark themes and customization
- 🔄 **State Management** - Built-in context provider

## Installation

```bash
npm install widget-button
# or
yarn add widget-button
```

## Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom @dynamic-labs/sdk-react-core wagmi viem
```

## Quick Start

```tsx
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { PreSale, PreSaleProvider } from 'widget-button';

function App() {
	return (
		<DynamicContextProvider
			settings={{
				environmentId: 'your-environment-id',
				walletConnectors: [
					/* your connectors */
				],
			}}
		>
			<PreSaleProvider>
				<PreSale
					title="Early Bird Sale"
					discountedPrice={0.003}
					tokenSymbol="TOKEN"
					onBuyCrypto={() => console.log('Buy with crypto')}
					onBuyCard={() => console.log('Buy with card')}
				/>
			</PreSaleProvider>
		</DynamicContextProvider>
	);
}
```

## Props

### PreSale Component

| Prop              | Type                | Default                     | Description            |
| ----------------- | ------------------- | --------------------------- | ---------------------- |
| `title`           | `string`            | "Offer For Early Investors" | Main heading text      |
| `discountedPrice` | `number`            | -                           | Token price to display |
| `tokenSymbol`     | `string`            | "TEMOC"                     | Token symbol           |
| `theme`           | `'light' \| 'dark'` | "light"                     | Color theme            |
| `onBuyCrypto`     | `                   |
