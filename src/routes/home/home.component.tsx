import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { addToCart } from '../../app/cart/cart.slice';
import Category from '../../components/category/category.component';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const filterByC = (filterBy: string) => {
    const fC = [];
    for (let i = 0; i < products.length; i++) {
      console.log('product:', products[i].name);
      for (let j = 0; j < products[i].categories.length; j++) {
        if (products[i].categories[j].name === filterBy) {
          fC.push(products[i]);
        }
      }
    }

    return fC;
  };
  return (
    <div className=''>
      <h1>Welcome to Meta Express</h1>
      {categories.map((c, id) => (
        <Category category={c} products={products} key={id} />
      ))}
    </div>
  );
};

export default Home;
