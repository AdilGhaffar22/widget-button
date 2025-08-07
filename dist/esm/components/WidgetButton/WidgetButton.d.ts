import React from 'react';
export interface WidgetButtonProps {
    className?: string;
    buttonText?: string;
    buttonClassName?: string;
    variant?: 'modal' | 'dropdown';
}
declare const WidgetButton: React.FC<WidgetButtonProps>;
export default WidgetButton;
