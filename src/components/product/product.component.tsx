import { MouseEvent } from 'react';
import { Product } from '../../types/product.types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/cart/cart.slice';
import { PortableText } from '@portabletext/react';

import { useState } from 'react';

type ProductProps = {
  product: Product | null;
};

const Product = ({ product }: ProductProps) => {
  const dispatch = useDispatch();
  const [imgPos, setImgPos] = useState(0);
  const handleClick = () => {
    dispatch(addToCart(product));
  };
  const handleChangePos = (e: MouseEvent<HTMLImageElement>) => {
    const { id } = e.target as HTMLImageElement;
    console.log('clicked', id);
    setImgPos(Number(id));
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-12'>
      <div className='w-full '>
        <img
          src={product?.image[imgPos].asset.url}
          className='block w-2/3'
          alt=''
        />
        <div className='flex w-1/3 md:w-1/5 relative'>
          {product?.image.map((img, id) => (
            <img
              className='hover:cursor-pointer'
              src={img.asset.url}
              id={`${id}`}
              onClick={handleChangePos}
              key={id}
            />
          ))}
        </div>
      </div>

      <div className='mt-4 md:flex md:flex-col max-w-prose  md:justify-center'>
        <h1 className='font-bold'>{product?.name}</h1>
        <p className=''>Price: {product?.price}</p>

        <div className=''>
          <h2 className=''>Description</h2>
          {product?.desc && <PortableText value={product?.desc} />}
        </div>
        <div className='mt-4 flex space-x-2'>
          <button
            onClick={handleClick}
            className='border-2 border-gray-600 text-gray-600 font-bold w-full py-2 '
          >
            Add to Cart
          </button>
          <button className='bg-gray-600 text-white w-full py-2'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
