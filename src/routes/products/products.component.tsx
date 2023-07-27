import { useEffect, useState } from 'react';
import { getProduct } from '../../sanity/sanity-utils';
import { useParams } from 'react-router-dom';
import Product from '../../components/product/product.component';

const Products = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    if (slug) {
      const product = await getProduct(slug);
      setProduct(product);
    }
  };

  return (
    <div className='h-screen'>
      <Product product={product} />
    </div>
  );
};

export default Products;
