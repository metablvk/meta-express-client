import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../app/cart/cart.slice';
import { Category } from '../../types/category.type';
import { Product } from '../../types/product.types';

type CProps = {
  category: Category;
  products: Product[];
};

const Category = ({ category, products }: CProps) => {
  const dispatch = useDispatch();
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
    <div className='mt-4'>
      <h2 className='text-3xl'>{category.name}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
        {filterByC(category.name)
          .slice(0, 10)
          .map((fC) => (
            <div className='border-2 p-4 mt-8'>
              <img
                src={fC.image[0].asset.url}
                alt={fC.name}
                className='block mx-auto w-3/4 md:w-2/4 lg:w-2/4'
              />
              <p>{fC.name}</p>
              <p>${fC.price}</p>
              <button
                className='block ml-auto bg-black text-white px-3 py-2'
                onClick={() => dispatch(addToCart(fC))}
              >
                Add to cart
              </button>
            </div>
          ))}
      </div>
      <div className='flex justify-end mt-4'>
        <Link to={`/products/${category.slug}`}>View More</Link>
      </div>
    </div>
  );
};

export default Category;