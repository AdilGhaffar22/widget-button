/// <reference types="react" />
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
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
 * <Container>
 *   <!-- your content here -->
 * </Container>
 */
export declare const Container: {
    ({ fluid, className, children, ...rest }: ContainerProps): JSX.Element;
    displayName: string;
};
