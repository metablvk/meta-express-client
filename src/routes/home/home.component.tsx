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
      <div className='mb-12 mt-12 h-40'>
        <h1 className='text-4xl font-bold tracking-wide'>
          Welcome to Meta Express
        </h1>
        <p>Bringing to you the latest tech.</p>
      </div>
      {categories.map((c, id) => (
        <Category category={c} products={products} key={id} />
      ))}
    </div>
  );
};

export default Home;
