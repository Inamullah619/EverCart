'use client';

import { useState, useEffect } from 'react';
import './Image.css';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image1.jpg',
  '/image2.jpg',
  //   '/images/image3.jpg',
  // Add more image paths as needed
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className='slideshow-container'>
      {images.map((src, index) => (
        <img
          style={{ width: '25rem', height: '25rem' }}
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
