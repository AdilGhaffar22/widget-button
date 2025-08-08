import {
	DynamicWidget,
	useDynamicContext,
	useDynamicEvents,
	useOpenFundingOptions,
} from '@dynamic-labs/sdk-react-core';
import React, { Fragment, useEffect, useState } from 'react';
import { Address } from 'viem';
import { useBalance } from 'wagmi';
import {
	Button,
	ButtonGrid,
	CloseButton,
	ConnectButton,
	Container,
	HelpLink,
	HelpText,
	IframeContainer,
	InfoRow,
	InfoText,
	ModalButtonContainer,
	ModalContent,
	ModalOverlay,
	ModalText,
	ModalTitle,
	Title,
	TokenBalanceLabel,
	TokenBalanceRow,
	TokenBalanceValue,
	TokenIcon,
	WidgetContainer,
} from './components/StylesComponents';
import { PreSaleProps } from './types';

interface ModalProps {
	show: boolean;
	onHide: (show: boolean) => void;
	children: React.ReactNode;
	maxWidth?: string;
	className?: string;
}

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
	tokenSymbol,
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
