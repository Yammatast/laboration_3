import { CartItem, useCart } from "@/context/cartContext";
import React from "react";
import { Button } from "..";
import { showToast } from "@/helpers/toast";

export type CartItemProps = {
    item : CartItem
}

export const CartItemComponent : React.FC<CartItemProps> = ({ item }) => {
    const {dispatch} = useCart();

    const deleteProduct = () => {
        dispatch({type: "REMOVE_ITEM", payload: item.id});
        showToast("success", <span>Product was removed from cart!</span>);
    }

    return (
        <div>
            {item.name} - ${item.price} x {item.quantity}
            <Button onClickEvent={deleteProduct}>Delete product</Button>
        </div>
    );
}
