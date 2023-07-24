import { useEffect, useState } from 'react';
import { getProduct } from '../../sanity/sanity-utils';
import { useParams } from 'react-router-dom';
import { Product } from '../../types/product.types';
import { PortableText } from '@portabletext/react';
import { addToCart } from '../../app/cart/cart.slice';
import { useDispatch } from 'react-redux';

const Product = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    if (slug) {
      const product = await getProduct(slug);
      setProduct(product);
      console.log(product);
    }
  };
  return (
    <>
      <div className='md:flex md:flex-row md:items-center justify-between'>
        <img
          src={product?.image[0].asset.url}
          className='w-2/3 mx-auto  md:w-2/4 lg:w-1/3 md:m-0'
          alt=''
        />
        <div className='lg:border p-4 lg:w-2/6'>
          <h1 className='font-bold text-2xl'>{product?.name}</h1>
          <p>Price: {product?.price}</p>
          <div className='flex flex-col  my-4 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
            <button
              onClick={() => dispatch(addToCart(product))}
              className='w-full border border-gray-600 text-gray-600 py-4 '
            >
              Add to Cart
            </button>
            <button className='w-full bg-gray-600 text-white py-4'>
              Buy Now
            </button>
          </div>
          <div className='max-w-prose'>
            <h2 className='font-bold'>Description</h2>
            {product?.desc && <PortableText value={product?.desc} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
