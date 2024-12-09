import React from 'react';
import { ProductCard, ProductCardProps } from '..';

export type ProductListProps = {
	productList: ProductCardProps[];
};

export const ProductList: React.FC<ProductListProps> = ({ productList }) => {
	return (
		<div className="grid grid-cols-4 gap-4">
			{productList.map((e: ProductCardProps, i: number) => {
				return (
					<div key={i}>
						<ProductCard productCardProps={e.productCardProps} />
					</div>
				);
			})}
		</div>
	);
};
