'use client'
import { showToast } from '@/helpers/toast';
import React, { createContext, ReactNode, useCallback, useContext, useReducer, useState } from 'react';

export type CartItem = {
    id: string,
    name: string,
    quantity: number,
    price: number
}

type CartState = {
    items: CartItem[],
    total: number
}

type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: string }
    | { type: 'INCREASE_QUANTITY'; payload: string }
    | { type: 'DECREASE_QUANTITY'; payload: string }

type CartContextProps = {
    state: CartState,
    dispatch: React.Dispatch<CartAction>
}
const initialState: CartState = {items: [], total: 0}

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
      case 'ADD_ITEM': {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        let updatedItems;
        if (existingItem) {
          updatedItems = state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          );
        } else {
          updatedItems = [...state.items, action.payload];
        }
        const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { items: updatedItems, total: newTotal };
      }
      case 'REMOVE_ITEM': {
        const updatedItems = state.items.filter(item => item.id !== action.payload);
        const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { items: updatedItems, total: newTotal };
      }
      case 'INCREASE_QUANTITY': {
        const updatedItems = state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        );
        const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { items: updatedItems, total: newTotal };
      }
      case 'DECREASE_QUANTITY': {
        const updatedItems = state.items.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { items: updatedItems, total: newTotal };
      }
      default:
        return state;
    }
  }


const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
  };


  export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };
