import { ButtonProps } from '@src/types/Button.types';
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Button.styled';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			id,
			className,
			onClick,
			color = 'primary',
			variant = 'solid',
			children,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Button
				ref={ref}
				id={id}
				variant={variant}
				$color={color}
				className={classNames('button-root', className)}
				onClick={onClick}
				{...rest}
			>
				{children}
			</Sc.Button>
		);
	},
);

Button.displayName = 'Button';
