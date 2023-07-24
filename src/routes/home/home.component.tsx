import { useSelector } from 'react-redux/es/hooks/useSelector';

import { RootState } from '../../app/store';

import Category from '../../components/category/category.component';

const Home = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );

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
