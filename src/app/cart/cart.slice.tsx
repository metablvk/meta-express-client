import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../../types/product.types';

export interface CartItem {
  product: Product;
  quantity: number;
}
export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      let updatedCartItems: CartItem[] = [];
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.product._id === action.payload._id
      );

      if (existingCartItem) {
        updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.product._id === action.payload._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCartItems = [
          ...state.cartItems,
          { product: action.payload, quantity: 1 },
        ];
      }
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    },
    removeItemFromCart(state, action) {
      let updatedCartItems: CartItem[] = [];

      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.product._id === action.payload.product._id
      );

      if (existingCartItem?.quantity === 1) {
        updatedCartItems = state.cartItems.filter(
          (cartItem) => cartItem.product._id !== action.payload.product._id
        );
      } else {
        updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.product._id === action.payload.product._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    },
  },
});

export const { addToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
