import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import { getProducts } from './sanity/sanity-utils';
import { productsLoading, productsRecieved } from './app/product/product.slice';
import { getCategories } from './sanity/sanity-utils';
import {
  categoriesLoading,
  categoriesRecieved,
} from './app/category/category.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './app/store';
import './App.css';
import { useEffect } from 'react';
import Product from './routes/product/product.component';
import Cart from './routes/cart/cart.component';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts(dispatch);
    fetchCategories(dispatch);
  }, []);

  const fetchProducts = async (dispatch: AppDispatch) => {
    dispatch(productsLoading());
    const products = await getProducts();
    dispatch(productsRecieved(products));
  };

  const fetchCategories = async (dispatch: AppDispatch) => {
    dispatch(categoriesLoading());
    const categories = await getCategories();
    dispatch(categoriesRecieved(categories));
  };

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/products/:slug' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
