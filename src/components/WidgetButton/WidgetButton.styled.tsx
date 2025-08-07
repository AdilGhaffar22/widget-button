import styled from '@emotion/styled';

export const WidgetButton = styled.button<{}>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: auto;
	outline: 0;
	border: 0;
	padding: 0.5rem 1.5rem;
	font-size: 0.875rem;
	border-radius: 0.25rem;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.2;
	}
`;
