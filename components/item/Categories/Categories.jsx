'use client';

import { useEffect, useState } from 'react';
import './category.css';

export default function Categories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        setCategory(json);
        console.log(json);
      })
      .catch((error) => console.error('Error fetching products:', error));
    console.log(setCategory);
    console.log(category);
  }, []);
  return (
    // <section>
    <div className='category'>
      <h1>Categories</h1>
      {category.length > 0 ? (
        <div className='category-map'>
          {/* <> */}
          {category.map((category, index) => (
            //   <div key={index}>
            <h2>{category}</h2>
            //   </div>
          ))}
          {/* </> */}
        </div>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
    // </section>
  );
}
