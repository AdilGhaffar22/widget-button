import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { ModalProps } from '../types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

const ModalOverlay = styled.div<{ show: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${({ show }) => (show ? 'block' : 'none')};
	z-index: 1000;
	animation: ${fadeIn} 0.2s ease-out;
`;

const ModalContent = styled.div<{ maxWidth?: string }>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 12px;
	max-width: ${({ maxWidth }) => maxWidth || '580px'};
	width: 90%;
	max-height: 90vh;
	overflow-y: auto;
	padding: 24px 20px;
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
	animation: ${slideIn} 0.2s ease-out;

	@media (min-width: 768px) {
		padding: 24px;
		width: 95%;
	}

	/* Custom scrollbar */
	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb {
		background: #c1c1c1;
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #a8a8a8;
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
	padding: 8px;
	border-radius: 4px;
	transition: all 0.2s ease-in-out;
	z-index: 10;

	&:hover {
		color: #374151;
		background-color: #f3f4f6;
	}

	&:focus {
		outline: 2px solid #c9fa49;
		outline-offset: 2px;
	}
`;

const Modal: React.FC<ModalProps> = ({
	show,
	onHide,
	children,
	maxWidth,
	className,
	closeOnOverlayClick = true,
}) => {
	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [show]);

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && show) {
				onHide(false);
			}
		};

		if (show) {
			document.addEventListener('keydown', handleEscapeKey);
		}

		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [show, onHide]);

	if (!show) return null;

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (closeOnOverlayClick && e.target === e.currentTarget) {
			onHide(false);
		}
	};

	return (
		<ModalOverlay show={show} onClick={handleOverlayClick}>
			<ModalContent maxWidth={maxWidth} className={className}>
				<CloseButton onClick={() => onHide(false)} aria-label="Close modal">
					×
				</CloseButton>
				{children}
			</ModalContent>
		</ModalOverlay>
	);
};

export default Modal;
