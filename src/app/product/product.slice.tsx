import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/product.types';

export interface ProductState {
  products: Product[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: ProductState = {
  products: [],
  loading: 'idle',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productsLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    productsRecieved(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.products = action.payload;
      }
    },
  },
});

export const { productsLoading, productsRecieved } = productSlice.actions;
export default productSlice.reducer;
