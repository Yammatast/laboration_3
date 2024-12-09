import React from 'react';

export type ButtonProps = {
	children: React.ReactNode;
	disabled?: boolean;
	onClickEvent: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	type?: 'button' | 'submit';
};

export const Button: React.FC<ButtonProps> = ({
	children,
	disabled = false,
	onClickEvent,
	type = 'button',
}) => {
	return (
		<button
			className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2"
			type={type}
			disabled={disabled}
			onClick={onClickEvent}
		>
			{children}
		</button>
	);
};
