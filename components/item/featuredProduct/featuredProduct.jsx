'use client';

import { useEffect, useState } from 'react';
import styles from './featuredProduct.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';

const featuredProduct = [
  {
    id: 1,
    image: '/featureImg1.jpeg',
  },
  {
    id: 2,
    image: '/featureImg2.jpeg',
  },
  {
    id: 3,
    image: '/featureImg3.jpeg',
  },
  {
    id: 4,
    image: '/featureImg4.jpeg',
  },
];

export default function FeaturedProduct() {
  return (
    <section className='featuredProduct'>
      <div className='top'>
        <h1>Featured Product</h1>
        <div>
          <span>View all products</span>
          <FaArrowRightLong />
        </div>
      </div>
      <div className='bottom'>
        {featuredProduct.length > 0 ? (
          <>
            {featuredProduct.map((product) => (
              <div key={product.id}>
                <h2>{product.title}</h2>
                {/* <span>Price: ${product.price}</span> */}
                <img
                  src={product.image}
                  alt={product.title}
                  //   style={{ width: '150px' }}
                  //   onError={(event) => handleImageError(event, product)}
                />
              </div>
            ))}
          </>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </section>
  );
}
