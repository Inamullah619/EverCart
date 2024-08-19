'use client';

import { useEffect, useState } from 'react';
import './category.css';

export default function Categories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((res) => res.json())
      .then((json) => {
        const limitedCategories = json.slice(0, 4); // Get only the first 4 categories
        setCategory(limitedCategories);
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className='category'>
      <h1>Categories</h1>
      {category.length > 0 ? (
        <div className='category-map'>
          {category.map((cat) => (
            <div key={cat.id} className='category-item'>
              <span>{cat.name}</span>
              <img src={cat.image} alt={cat.name} />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading Categories...</p>
      )}
    </div>
  );
}
