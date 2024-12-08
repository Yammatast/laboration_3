'use client'
import React from 'react'
import { Button, Heading, LinkComponent } from '..'
import Image from 'next/image'
import { useCart } from '@/context/cartContext'
import { showToast } from '@/helpers/toast'

export type ProductCardProps = {
    productCardProps: {
        id: string,
        price: number,
        image: string
        altText: string
        title: string
    }
}

export const ProductCard: React.FC<ProductCardProps> = ({
    productCardProps,
}) => {
    const {dispatch} = useCart();
    const clickHandler = () => {
        dispatch({type: "ADD_ITEM", payload: {id: productCardProps.id,name: productCardProps.title, quantity: 1, price: productCardProps.price}})
        showToast("success", <span>Product was added to cart!</span>);
    }
    return (
            <div>
                <Image
                    height={200}
                    width={200}
                    src={productCardProps.image}
                    alt={productCardProps.altText}
                />
                <Heading headingLevel="h3">
                    {productCardProps.title}
                </Heading>
                <Button onClickEvent={clickHandler}>Add to cart</Button>
            </div>
    )
}
