import { Product } from '../types/product.types';

const filterByC = (filterBy: string, products: Product[]) => {
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

export default filterByC;
