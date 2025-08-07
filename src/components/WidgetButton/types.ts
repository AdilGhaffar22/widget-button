export interface WidgetButtonProps {
	className?: string;
	buttonText?: string;
	buttonClassName?: string;
	variant?: 'modal' | 'dropdown';
}

export interface WidgetButtonState {
	isLoading?: boolean;
	error?: string | null;
}
