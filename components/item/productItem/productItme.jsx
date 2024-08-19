'use client';

import React, { useEffect, useState } from 'react';

export default function ProductItem() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((json) => {
        // Filter out products without images
        const filteredProducts = json.filter(
          (product) => product.images && product.images.length > 0
        );

        // Remove the last 16 products from the filtered list
        const limitedProducts = filteredProducts.slice(1, 50);

        setProducts(limitedProducts);
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
                {/* <h1>{product.id}</h1> */}
                <h2>{product.title}</h2>
                <span>Price: ${product.price}</span>
                <p>{product.description}</p>
                <img
                  src={product.images[0]}
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
