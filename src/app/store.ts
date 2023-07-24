import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/product.slice';
import cartReducer from './cart/cart.slice';
import categoryReducer from './category/category.slice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
