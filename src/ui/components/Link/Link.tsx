import Link from 'next/link';
import React from 'react';

export type LinkProps = {
	children: React.ReactNode;
	url: string;
	className: string;
};

export const LinkComponent: React.FC<LinkProps> = ({
	children,
	url,
	className,
}) => {
	return (
		<Link className={className} href={url}>
			{children}
		</Link>
	);
};
