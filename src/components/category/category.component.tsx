import { Link } from 'react-router-dom';

import { Category } from '../../types/category.type';
import { Product } from '../../types/product.types';
import CategoryProduct from './category-card/category-card.component';
import filterByC from '../../utils/filter.utils';

type CProps = {
  category: Category;
  products: Product[];
};

const Category = ({ category, products }: CProps) => {
  return (
    <div className='my-12'>
      <h2 className='text-3xl mb-4'>{category.name}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {filterByC(category.name, products)
          .slice(0, 10)
          .map((p, id) => (
            <CategoryProduct p={p} key={id} />
          ))}
      </div>
    </div>
  );
};

export default Category;
