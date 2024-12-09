import React from 'react';
import { LinkComponent } from '..';

export type HeaderProps = {
	navigation: { name: string; url: string }[];
};

export const Header: React.FC<HeaderProps> = ({ navigation }) => {
	return (
		<header className="bg-gray-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<nav className="flex items-center justify-between h-16">
					<div className="text-xl font-bold">
						<LinkComponent url="/" className="hover:text-gray-300">
							MyBrand
						</LinkComponent>
					</div>
					<div className="flex space-x-6">
						{navigation.map((item, index) => (
							<LinkComponent
								key={index}
								url={item.url}
								className="hover:text-gray-300"
							>
								{item.name}
							</LinkComponent>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
};
