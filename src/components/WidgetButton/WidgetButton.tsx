import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import React from 'react';
import { Button } from '../Button';

export interface WidgetButtonProps {
	className?: string;
	buttonText?: string;
	buttonClassName?: string;
	variant?: 'modal' | 'dropdown';
}

const WidgetButton: React.FC<WidgetButtonProps> = ({
	className = '',
	buttonText = 'Connect Wallet',
	buttonClassName = '!bg-[#C9FA49] !text-[#333333] font-bold rounded-full',
	variant = 'modal',
}) => {
	// const { primaryWallet } = useDynamicContext();

	return (
		<div className={className}>
			{/* {primaryWallet?.isConnected && ( */}
			<DynamicWidget
				variant={variant}
				innerButtonComponent={
					<Button color="primary" className="AtConnect" variant="solid">
						{buttonText}
					</Button>
				}
				buttonClassName={buttonClassName}
			/>
			{/* )} */}
		</div>
	);
};

export default WidgetButton;
