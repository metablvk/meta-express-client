import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../../types/category.type';

export interface CategoryState {
  categories: Category[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: CategoryState = {
  categories: [],
  loading: 'idle',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoriesLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    categoriesRecieved(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.categories = action.payload;
      }
    },
  },
});

export const { categoriesLoading, categoriesRecieved } = categorySlice.actions;
export default categorySlice.reducer;
