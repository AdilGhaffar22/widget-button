/// <reference types="react" />
export type Color = "primary" | "secondary" | "success" | "error" | "warn";
export type Variant = "solid" | "outline" | "text";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The color of the Button.
     *
     * @default 'primary'
     */
    color?: Color;
    /**
     * The visual style of the Button.
     *
     * @default 'solid'
     */
    variant?: Variant;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
