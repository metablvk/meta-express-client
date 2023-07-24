import { createClient } from '@sanity/client';
import clientConfig from './config/client-config';
import { Product } from '../types/product.types';
import { Category } from '../types/category.type';

export async function getProducts(): Promise<Product[]> {
  return createClient(clientConfig).fetch(
    `*[_type == "product"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      image[]{
        asset->{url}
      },
      price,
      discount, 
     categories[]->{ name},
      desc
    }`
  );
}

export async function getProduct(slug: string): Promise<Product> {
  return createClient(clientConfig).fetch(
    `*[_type == "product" && slug.current == $slug][0]{
     _id,
      _createdAt,
      name,
      "slug": slug.current,
      image[]{
        asset->{url}
      },
      price,
      discount, 
     categories[]->{ name},
      desc
    }`,
    { slug }
  );
}

export async function getCategories(): Promise<Category[]> {
  return createClient(clientConfig).fetch(
    `*[_type == "category"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
    }`
  );
}
