import React from 'react';

export type HeadingProps = {
	children?: React.ReactNode;
	headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
};

export const Heading: React.FC<HeadingProps> = ({
	children,
	headingLevel,
	className,
}) => React.createElement(headingLevel, { className, children });
