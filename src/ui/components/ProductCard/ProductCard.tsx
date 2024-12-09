'use client';
import React from 'react';
import { Button, Heading, LinkComponent } from '..';
import Image from 'next/image';
import { useCart } from '@/context/cartContext';
import { showToast } from '@/helpers/toast';

export type ProductCardProps = {
	productCardProps: {
		id: string;
		price: number;
		image: string;
		altText: string;
		title: string;
	};
};

export const ProductCard: React.FC<ProductCardProps> = ({
	productCardProps,
}) => {
	const { dispatch } = useCart();
	const clickHandler = () => {
		dispatch({
			type: 'ADD_ITEM',
			payload: {
				id: productCardProps.id,
				name: productCardProps.title,
				quantity: 1,
				price: productCardProps.price,
			},
		});
		showToast('success', <span>Product was added to cart!</span>);
	};
	return (
		<div className="w-64 h-80 flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
			<div className="w-full h-40 overflow-hidden">
				<Image
					className="object-cover w-full h-full"
					src={productCardProps.image}
					alt={productCardProps.altText}
					layout="responsive"
					width={300}
					height={200}
				/>
			</div>
			<div className="flex-grow p-4 flex flex-col justify-between">
				<Heading
					headingLevel="h3"
					className="text-lg font-semibold overflow-hidden"
				>
					{productCardProps.title}
				</Heading>
				<div className="mt-auto">
					<span className="block text-gray-700 mb-2">
						${productCardProps.price.toFixed(2)}
					</span>
					<Button onClickEvent={clickHandler}>Add to cart</Button>
				</div>
			</div>
		</div>
	);
};
