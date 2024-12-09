import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
	it('renders correctly with children', () => {
		render(<Button onClickEvent={() => {}}>Click Me</Button>);
		expect(screen.getByText('Click Me')).toBeInTheDocument();
	});

	it('handles click events', () => {
		const handleClick = jest.fn();
		render(<Button onClickEvent={handleClick}>Click Me</Button>);

		const button = screen.getByText('Click Me');
		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('is disabled when the `disabled` prop is true', () => {
		const handleClick = jest.fn();
		render(
			<Button onClickEvent={handleClick} disabled>
				Click Me
			</Button>
		);

		const button = screen.getByText('Click Me');
		expect(button).toBeDisabled();
		fireEvent.click(button);
		expect(handleClick).not.toHaveBeenCalled();
	});

	it('renders with the correct type attribute', () => {
		render(
			<Button onClickEvent={() => {}} type="submit">
				Submit
			</Button>
		);

		const button = screen.getByText('Submit');
		expect(button).toHaveAttribute('type', 'submit');
	});
});
