import { classNames } from '../../utils/classNames';
import * as Sc from './PresaleWidget.styled';

export interface PresaleWidgetProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * If `true`, apply `width: 100%`.
	 *
	 * @default false
	 */
	fluid?: boolean;
}

/**
 * The fundamental building block that centers your content horizontally.
 * It creates a simple `div` to wrap your content and align within a given viewport.
 *
 * @example
 * <PresaleWidget>
 *   <!-- your content here -->
 * </PresaleWidget>
 */
export const PresaleWidget = ({
	fluid = false,
	className,
	children,
	...rest
}: PresaleWidgetProps) => {
	const classes = classNames(
		'PresaleWidget-root',
		fluid ? 'PresaleWidget-fluid' : '',
		className,
	);

	if (fluid) {
		return (
			<Sc.FluidPresaleWidget className={classes} {...rest}>
				{children}
			</Sc.FluidPresaleWidget>
		);
	}

	return (
		<Sc.PresaleWidget className={classes} {...rest}>
			{children}
		</Sc.PresaleWidget>
	);
};

PresaleWidget.displayName = 'PresaleWidget';
