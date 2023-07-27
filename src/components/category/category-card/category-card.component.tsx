import { Link } from 'react-router-dom';
import { Product } from '../../../types/product.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './category-card.styles.css';

type CPProps = {
  p: Product;
};

const CategoryProduct = ({ p }: CPProps) => {
  return (
    <Link to={`/products/${p.slug}`}>
      <div className='category-card relative border p-2'>
        <img src={p.image[0].asset.url} alt={p.name} className='' />
        <p className=''>
          {p.name.length > 25 ? `${p.name.slice(0, 25)}...` : p.name}
        </p>
        <p>${p.price}</p>
        <div className='view-more absolute'>
          <FontAwesomeIcon icon={faCartShopping} className='text-3xl' />
        </div>
      </div>
    </Link>
  );
};

export default CategoryProduct;
