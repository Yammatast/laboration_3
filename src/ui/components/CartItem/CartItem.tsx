import { CartItem, useCart } from '@/context/cartContext';
import React from 'react';
import { Button } from '..';
import { showToast } from '@/helpers/toast';

export type CartItemProps = {
	item: CartItem;
};

export const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
	const { dispatch } = useCart();

	const deleteProduct = () => {
		dispatch({ type: 'REMOVE_ITEM', payload: item.id });
		showToast('success', <span>Product was removed from cart!</span>);
	};

	return (
		<div className="w-64 h-80 flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
			<div className="w-full h-40 overflow-hidden bg-gray-100 flex items-center justify-center">
				<span className="text-gray-500 text-xl font-semibold">
					{item.name.slice(0, 1)}
				</span>
			</div>
			<div className="flex-grow p-4 flex flex-col justify-between">
				<div>
					<h3 className="text-lg font-semibold text-gray-900">
						{item.name}
					</h3>
					<p className="text-gray-700">
						${item.price.toFixed(2)} x {item.quantity}
					</p>
				</div>
				<div className="mt-auto">
					<Button onClickEvent={deleteProduct}>Delete Product</Button>
				</div>
			</div>
		</div>
	);
};
