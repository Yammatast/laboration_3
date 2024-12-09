// Footer.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { Footer } from '../Footer';
import { showToast } from '@/helpers/toast';

jest.mock('@/helpers/toast', () => ({
	showToast: jest.fn(),
}));

describe('Footer Component', () => {
	it('renders correctly with input and button', () => {
		render(<Footer />);

		expect(screen.getByLabelText(/Complaints\?\?\?/i)).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText(/Enter your email/i)
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /Send Complaint/i })
		).toBeInTheDocument();
	});

	it('calls showToast with correct message when button is clicked', () => {
		render(<Footer />);

		fireEvent.click(
			screen.getByRole('button', { name: /Send Complaint/i })
		);

		expect(showToast).toHaveBeenCalledWith('info', expect.anything());
		expect(showToast).toHaveBeenCalledWith(
			'info',
			expect.objectContaining({
				type: 'span',
				props: { children: 'Your complaint has been registered' },
			})
		);
	});
});
