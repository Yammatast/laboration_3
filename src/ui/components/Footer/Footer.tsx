'use client';
import React from 'react';
import { Button } from '..';
import { showToast } from '@/helpers/toast';

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({}) => {
	const clickHandler = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		showToast('info', <span>Your complaint has been registered</span>);
	};

	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="max-w-4xl mx-auto px-4">
				<form className="flex flex-col space-y-4">
					<label htmlFor="email" className="text-lg font-medium">
						Complaints??? 😊 Enter your email and we’ll be in touch:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email"
						className="p-2 rounded-md border border-gray-300 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
					/>
					<Button onClickEvent={(e) => clickHandler(e)} type="submit">
						Send Complaint
					</Button>
				</form>
				<div className="mt-8 text-center text-sm text-gray-400">
					© {new Date().getFullYear()} MyBrand. All rights reserved.
				</div>
			</div>
		</footer>
	);
};
