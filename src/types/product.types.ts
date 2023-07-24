import { PortableTextBlock } from 'sanity';
import { Category } from './category.type';

export type Image = {
  asset: {
    url: string;
  };
};

export type Product = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: Image[];
  price: number;
  discount: number;
  categories: Category[];
  desc: PortableTextBlock[];
};
