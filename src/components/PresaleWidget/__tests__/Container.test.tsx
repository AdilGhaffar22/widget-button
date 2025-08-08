import { render, screen } from '@testing-library/react';
import { PresaleWidget } from '../index';

describe('PresaleWidget', () => {
	test('Should render PresaleWidget correctly', () => {
		render(<PresaleWidget data-testid="basic-presale-widget" />);
		expect(screen.getByTestId('basic-presale-widget')).toBeInTheDocument();
	});

	test('Should render child element as a descendant', () => {
		render(
			<PresaleWidget data-testid="container-with-child">
				<div>Content</div>
			</PresaleWidget>,
		);
		expect(screen.getByTestId('container-with-child')).toHaveTextContent(
			'Content',
		);
	});

	test('Should have some certain classes within `class` attribute', () => {
		render(
			<PresaleWidget
				data-testid="custom-container"
				className="custom-class developer-class"
			/>,
		);
		expect(screen.getByTestId('custom-container')).toHaveClass('custom-class');
		expect(screen.getByTestId('custom-container')).toHaveClass(
			'developer-class',
		);
	});
});
