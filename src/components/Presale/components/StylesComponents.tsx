import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonProps } from '../types';

export const Container = styled.div<{ theme?: string }>`
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

export const Title = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 24px;
	color: inherit;

	@media (min-width: 768px) {
		font-size: 2.5rem;
	}
`;

export const WidgetContainer = styled.div`
	margin-top: 24px;
	display: flex;
	justify-content: center;
`;

export const InfoRow = styled.div`
	margin-top: 28px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 8px;
`;

export const InfoText = styled.span`
	font-size: 16px;
	color: #000000;
`;

export const TokenBalanceRow = styled.div`
	margin-top: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const TokenBalanceLabel = styled.span`
	font-size: 16px;
	color: rgba(0, 0, 0, 0.6);
`;

export const TokenBalanceValue = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 16px;
	color: #c9fa49;
`;

export const TokenIcon = styled.img`
	height: 24px;
	width: 24px;
	border-radius: 50%;
	flex-shrink: 0;
	cursor: pointer;
	object-fit: cover;
`;

export const ButtonGrid = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	align-items: center;
`;

export const Button = styled.button<ButtonProps>`
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

export const ConnectButton = styled(Button)`
	background-color: #c9fa49;
	color: #333333;
	font-weight: 700;
	border-radius: 9999px;
`;

export const HelpText = styled.div`
	margin-top: 16px;
	text-align: center;
	font-size: 12px;
	font-weight: 400;

	p {
		color: #000000;
		margin: 0;
	}
`;

export const HelpLink = styled.span`
	cursor: pointer;
	color: #c9fa49;

	&:hover {
		text-decoration: underline;
	}
`;

// Modal Components
export const ModalOverlay = styled.div<{ show: boolean }>`
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

export const ModalContent = styled.div<{ maxWidth?: string }>`
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

export const CloseButton = styled.button`
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

export const ModalTitle = styled.h2`
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

export const ModalText = styled.p`
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

export const ModalButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`;

export const IframeContainer = styled.div`
	position: relative;

	iframe {
		height: 630px;
		width: 100%;
		border: none;
	}
`;
