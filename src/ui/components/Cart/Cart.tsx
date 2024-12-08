'use client'
import { useCart } from "@/context/cartContext";
import React from "react";
import { CartItemComponent } from "../CartItem";

export type CartProps = {

}

export const Cart : React.FC<CartProps> = ({ }) => {
    const {state} = useCart();
    return (
        <div>
            {state.items.map((item) => (
                <div key={item.id}>
                    <CartItemComponent item={item}/>
                </div>
            ))}
        </div>
    );
}
