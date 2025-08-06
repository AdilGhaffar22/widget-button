/// <reference types="react" />
import type { Color, Variant } from "./Button";
export declare const Button: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & {
    $color: Color;
    variant: Variant;
}, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
