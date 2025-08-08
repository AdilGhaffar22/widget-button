/// <reference types="react" />
export interface PresaleWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
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
export declare const PresaleWidget: {
    ({ fluid, className, children, ...rest }: PresaleWidgetProps): JSX.Element;
    displayName: string;
};
