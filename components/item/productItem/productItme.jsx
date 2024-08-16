'use client';

import React, { useEffect, useState } from 'react';

export default function ProductItem() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log(json);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  return (
    <div>
      {products.length > 0 ? (
        <ul>
          {products.map((product, index) => (
            <div key={index}>
              <li
                key={product.id}
                style={{ listStyleType: 'none', marginBottom: '20px' }}
              >
                <h2>{product.title}</h2>
                <span>Price: ${product.price}</span>
                <p>{product.description}</p>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '150px' }}
                />
                <span>Rating: {product.rating?.rate} / 5</span>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}
