// import { DynamicWidget, useDynamicContext, useDynamicEvents, useOpenFundingOptions } from '@dynamic-labs/sdk-react-core';
// import { useState, useEffect, Fragment } from 'react';
// import { Address } from "viem";
// import { useBalance } from "wagmi";
// import { PreSaleProps } from './types';
'useConfig';

import {
	DynamicWidget,
	useDynamicContext,
	useDynamicEvents,
	useOpenFundingOptions,
} from '@dynamic-labs/sdk-react-core';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { Fragment, useEffect, useState } from 'react';
import { Address } from 'viem';
import { useBalance } from 'wagmi';
import { ButtonProps, PreSaleProps } from './types';

// import { DynamicWidget, useDynamicContext, useDynamicEvents, useOpenFundingOptions } from '@dynamic-labs/sdk-react-core';
// import { useState, useEffect, Fragment } from 'react';
// import { Address } from "viem";
// import { useBalance } from "wagmi";
// import { PreSaleProps } from './types';

// import { DynamicWidget, useDynamicContext, useDynamicEvents, useOpenFundingOptions } from '@dynamic-labs/sdk-react-core';
// import { useState, useEffect, Fragment } from 'react';
// import { Address } from "viem";
// import { useBalance } from "wagmi";
// import { PreSaleProps } from './types';

// import { DynamicWidget, useDynamicContext, useDynamicEvents, useOpenFundingOptions } from '@dynamic-labs/sdk-react-core';
// import { useState, useEffect, Fragment } from 'react';
// import { Address } from "viem";
// import { useBalance } from "wagmi";
// import { PreSaleProps } from './types';

// import { DynamicWidget, useDynamicContext, useDynamicEvents, useOpenFundingOptions } from '@dynamic-labs/sdk-react-core';
// import { useState, useEffect, Fragment } from 'react';
// import { Address } from "viem";
// import { useBalance } from "wagmi";
// import { PreSaleProps } from './types';

// import { DynamicWidget, useDynamicContext, useDynamicEvents, useOpenFundingOptions } from '@dynamic-labs/sdk-react-core';
// import { useState, useEffect, Fragment } from 'react';
// import { Address } from "viem";
// import { useBalance } from "wagmi";
// import { PreSaleProps } from './types';

// import { DynamicWidget, useDynamicContext, useDynamicEvents, useOpenFundingOptions } from '@dynamic-labs/sdk-react-core';
// import { useState, useEffect, Fragment } from 'react';
// import { Address } from "viem";
// import { useBalance } from "wagmi";
// import { PreSaleProps } from './types';

// import { DynamicWidget, useDynamicContext, useDynamicEvents, useOpenFundingOptions } from '@dynamic-labs/sdk-react-core';
// import { useState, useEffect, Fragment } from 'react';
// import { Address } from "viem";
// import { useBalance } from "wagmi";
// import { PreSaleProps } from './types';

// import { DynamicWidget, useDynamicContext, useDynamicEvents, useOpenFundingOptions } from '@dynamic-labs/sdk-react-core';
// import { useState, useEffect, Fragment } from 'react';
// import { Address } from "viem";
// import { useBalance } from "wagmi";
// import { PreSaleProps } from './types';

// import { DynamicWidget, useDynamicContext, useDynamicEvents, useOpenFundingOptions } from '@dynamic-labs/sdk-react-core';
// import { useState, useEffect, Fragment } from 'react';
// import { Address } from "viem";
// import { useBalance } from "wagmi";
// import { PreSaleProps } from './types';

interface ModalProps {
	show: boolean;
	onHide: (show: boolean) => void;
	children: React.ReactNode;
	maxWidth?: string;
	className?: string;
}

// Styled Components
const Container = styled.div<{ theme?: string }>`
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: 750px;
	padding: 20px;

	@media (min-width: 768px) {
		padding: 32px;
	}

	@media (min-width: 1024px) {
		padding: 28px 32px;
	}

	@media (min-width: 1280px) {
		padding: 40px 50px;
	}

	${({ theme }) =>
		theme === 'dark' &&
		css`
			background-color: #1f2937;
			color: white;
		`}
`;

const Title = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 24px;
	color: inherit;

	@media (min-width: 768px) {
		font-size: 2.5rem;
	}
`;

const WidgetContainer = styled.div`
	margin-top: 24px;
	display: flex;
	justify-content: center;
`;

const InfoRow = styled.div`
	margin-top: 28px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 8px;
`;

const InfoText = styled.span`
	font-size: 16px;
	color: #000000;
`;

const TokenBalanceRow = styled.div`
	margin-top: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const TokenBalanceLabel = styled.span`
	font-size: 16px;
	color: rgba(0, 0, 0, 0.6);
`;

const TokenBalanceValue = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 16px;
	color: #c9fa49;
`;

const TokenIcon = styled.img`
	height: 24px;
	width: 24px;
	border-radius: 50%;
	flex-shrink: 0;
	cursor: pointer;
	object-fit: cover;
`;

const ButtonGrid = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	align-items: center;
`;

const Button = styled.button<ButtonProps>`
	border: none;
	border-radius: 8px;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	${({ size }) => {
		switch (size) {
			case 'small':
				return css`
					padding: 8px 16px;
					font-size: 14px;
					height: 36px;
				`;
			case 'large':
				return css`
					padding: 16px 32px;
					font-size: 18px;
					height: 65px;
					width: 194px;
				`;
			default:
				return css`
					padding: 12px 24px;
					font-size: 16px;
					height: 51px;
				`;
		}
	}}

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

  ${({ variant }) => {
		switch (variant) {
			case 'secondary':
				return css`
					background-color: #f3f4f6;
					color: #374151;

					&:hover {
						background-color: #e5e7eb;
						transform: translateY(-1px);
					}
				`;
			case 'outline':
				return css`
					background-color: transparent;
					color: #c9fa49;
					border: 2px solid #c9fa49;

					&:hover {
						background-color: #c9fa49;
						color: #333333;
						transform: translateY(-1px);
					}
				`;
			default:
				return css`
					background-color: #c9fa49;
					color: #333333;

					&:hover {
						background-color: #b8e63a;
						transform: translateY(-1px);
						box-shadow: 0 4px 12px rgba(201, 250, 73, 0.3);
					}
				`;
		}
	}}

  &:disabled {
		opacity: 0.6;
		cursor: not-allowed;

		&:hover {
			transform: none;
			box-shadow: none;
		}
	}

	&:active {
		transform: translateY(0);
	}

	&.full-width-button {
		grid-column: span 2;
	}
`;

const ConnectButton = styled(Button)`
	background-color: #c9fa49;
	color: #333333;
	font-weight: 700;
	border-radius: 9999px;
`;

const HelpText = styled.div`
	margin-top: 16px;
	text-align: center;
	font-size: 12px;
	font-weight: 400;

	p {
		color: #000000;
		margin: 0;
	}
`;

const HelpLink = styled.span`
	cursor: pointer;
	color: #c9fa49;

	&:hover {
		text-decoration: underline;
	}
`;

// Modal Components
const ModalOverlay = styled.div<{ show: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${({ show }) => (show ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	z-index: 1000;
	padding: 16px;
`;

const ModalContent = styled.div<{ maxWidth?: string }>`
	background-color: white;
	border-radius: 12px;
	max-width: ${({ maxWidth }) => maxWidth || '580px'};
	width: 100%;
	max-height: 90vh;
	overflow-y: auto;
	position: relative;
	padding: 24px 20px;

	@media (min-width: 768px) {
		padding: 24px;
	}
`;

const CloseButton = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
	background: none;
	border: none;
	font-size: 24px;
	cursor: pointer;
	color: #6b7280;
	padding: 4px;

	&:hover {
		color: #374151;
	}
`;

const ModalTitle = styled.h2`
	font-size: 2rem;
	color: #212428;
	font-weight: 600;
	margin-top: 16px;
	text-align: center;
	margin-bottom: 20px;

	@media (max-width: 640px) {
		margin-top: 8px;
	}
`;

const ModalText = styled.p`
	font-size: 20px;
	color: #212428;
	margin-top: 20px;
	text-align: center;
	max-width: 480px;
	margin-left: auto;
	margin-right: auto;
	line-height: 1.5;

	@media (max-width: 640px) {
		font-size: 16px;
	}

	i {
		font-size: 14px;
		margin-top: 12px;
		display: block;

		b {
			font-weight: 700;
		}
	}

	span {
		font-weight: 600;
	}
`;

const ModalButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`;

const IframeContainer = styled.div`
	position: relative;

	iframe {
		height: 630px;
		width: 100%;
		border: none;
	}
`;

// Modal Component
const Modal: React.FC<ModalProps> = ({
	show,
	onHide,
	children,
	maxWidth,
	className,
}) => {
	if (!show) return null;

	return (
		<ModalOverlay show={show} onClick={() => onHide(false)}>
			<ModalContent
				maxWidth={maxWidth}
				className={className}
				onClick={(e) => e.stopPropagation()}
			>
				<CloseButton onClick={() => onHide(false)}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalOverlay>
	);
};

const PreSale: React.FC<PreSaleProps> = ({
	title = 'Offer For Early Investors',
	discountedPrice,
	tokenSymbol = 'TEMOC',
	onBuyCrypto,
	onBuyCard,
	onBankTransfer,
	tokenValues,
	formatDisplayAmount,
	className = '',
	theme = 'light',
}) => {
	const [paymentType, setPaymentType] = useState('');
	const [typeToSwitch, setTypeToSwitch] = useState('');
	const [prevBalance, setPrevBalance] = useState(0);
	const [showOthers, setShowOthers] = useState(false);
	const [top, setTop] = useState(false);
	const [walletConfirmation, setWalletConfirmation] = useState(false);

	useDynamicEvents('walletAdded', async (params: any) => {
		if (typeToSwitch === 'crypto') {
			setPaymentType('Crypto');
			setTypeToSwitch('');
			setWalletConfirmation(false);
		} else if (typeToSwitch === 'card') {
			setPaymentType('Card');
			setTypeToSwitch('');
			setWalletConfirmation(false);
		}
	});

	const { openFundingOptions } = useOpenFundingOptions();
	const { user, setShowAuthFlow, primaryWallet } = useDynamicContext();

	const { data: balance } = useBalance({
		address: primaryWallet?.address as Address,
	});

	const handleBuy = () => {
		if (!user) {
			setWalletConfirmation(true);
			setTypeToSwitch('crypto');
			return;
		}

		if (onBuyCrypto) {
			onBuyCrypto();
		}
		setPaymentType('Crypto');
	};

	const handleBuyWithCard = () => {
		if (!user) {
			setWalletConfirmation(true);
			setTypeToSwitch('card');
			return;
		}

		if (onBuyCard) {
			onBuyCard();
		}
		setPaymentType('Card');
	};

	const handleBankTransfer = () => {
		if (onBankTransfer) {
			onBankTransfer();
		}
		setShowOthers(true);
	};

	useEffect(() => {
		if (prevBalance !== null && balance?.value && balance.value > prevBalance) {
			setPrevBalance(0);
		}
	}, [balance?.value, prevBalance]);

	useEffect(() => {
		if (primaryWallet?.isConnected) {
			setWalletConfirmation(false);
			if (typeToSwitch === 'crypto') {
				setPaymentType('Crypto');
			} else if (typeToSwitch === 'card') {
				setPaymentType('Card');
			}
		}
		if (!primaryWallet?.isConnected) {
			setPaymentType('');
		}
	}, [primaryWallet?.isConnected]);

	// Mock user purchased amount - replace with actual data
	const userPurchasedAmountData = { totalTokens: 1000 };

	return (
		<Fragment>
			<Container theme={theme} className={className}>
				<Title>{title}</Title>

				<WidgetContainer>
					{primaryWallet?.isConnected && (
						<DynamicWidget
							variant="modal"
							innerButtonComponent={
								<ConnectButton>Connect Wallet</ConnectButton>
							}
						/>
					)}
				</WidgetContainer>

				<InfoRow>
					<InfoText>Public Presale</InfoText>
					<InfoText>
						Discounted Price - ${discountedPrice || tokenValues?.price} USD
					</InfoText>
				</InfoRow>

				{primaryWallet?.isConnected && userPurchasedAmountData && (
					<TokenBalanceRow>
						<TokenBalanceLabel>Token Balance</TokenBalanceLabel>
						<TokenBalanceValue>
							<TokenIcon src="/assets/images/coin.png" alt="" />
							{formatDisplayAmount
								? formatDisplayAmount(userPurchasedAmountData.totalTokens)
								: userPurchasedAmountData.totalTokens}
						</TokenBalanceValue>
					</TokenBalanceRow>
				)}

				{paymentType === '' && (
					<div>
						<ButtonGrid>
							<Button fullWidth onClick={handleBuy}>
								Buy with Crypto
							</Button>
							<Button fullWidth onClick={handleBuyWithCard}>
								Buy With Card
							</Button>
							<Button
								fullWidth
								className="full-width-button"
								onClick={handleBankTransfer}
							>
								Bank Transfer/Others
							</Button>
						</ButtonGrid>
					</div>
				)}

				{paymentType !== 'Card' && (
					<HelpText>
						<p>
							Don't have enough Crypto?{' '}
							<HelpLink onClick={() => setTop(true)}>
								Top up with Debit/Credit Card
							</HelpLink>
						</p>
					</HelpText>
				)}
			</Container>

			{/* Top Up Modal */}
			<Modal show={top} onHide={setTop} maxWidth="580px">
				<ModalTitle>Top Up Your Wallet</ModalTitle>
				<ModalText>
					To begin, please read the instructions and click "Continue." After you
					connect your wallet, select the <strong>"Buy Crypto"</strong> option
					and choose your preferred exchange (e.g., Coinbase or Banxa) to
					complete the top-up. Once your wallet is funded, return to the home
					page to purchase {tokenSymbol} tokens.
				</ModalText>
				<ModalButtonContainer>
					<Button
						size="large"
						onClick={() => {
							if (!primaryWallet?.isConnected) {
								setShowAuthFlow(true);
								setTop(false);
							}
							openFundingOptions();
						}}
					>
						Continue
					</Button>
				</ModalButtonContainer>
			</Modal>

			{/* Wallet Confirmation Modal */}
			<Modal
				show={walletConfirmation}
				onHide={setWalletConfirmation}
				maxWidth="580px"
			>
				<ModalTitle>Connect Your Wallet</ModalTitle>
				<ModalText>
					To get started, please connect your wallet. Don't have one? No worries
					— just sign in with your email, and we'll create a wallet for you
					automatically!
					<i>
						<b>Note:</b> We need your wallet to deliver your tokens once the
						project launches.
					</i>
				</ModalText>
				<ModalButtonContainer>
					<Button
						size="large"
						onClick={() => {
							if (!primaryWallet?.isConnected) {
								setShowAuthFlow(true);
								setWalletConfirmation(false);
							}
						}}
					>
						Continue
					</Button>
				</ModalButtonContainer>
			</Modal>

			{/* Bank Transfer Modal */}
			<Modal show={showOthers} onHide={setShowOthers} maxWidth="800px">
				<IframeContainer>
					<iframe
						width="660"
						title="Embedded URL"
						src="https://form.typeform.com/to/rhFjPMgx"
					/>
				</IframeContainer>
			</Modal>
		</Fragment>
	);
};

export default PreSale;
