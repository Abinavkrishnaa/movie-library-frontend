import React from 'react';
import { motion } from 'framer-motion';
import img1 from  './img1.jpg';
import img2 from './img2.jpg';
import img3 from  './img3.jpg';
import img4 from './img4.jpg';

const movies = [
  { title: 'Movie 1', image: {img1} },
  { title: 'Movie 2', image: {img2} },
  { title: 'Movie 3', image: {img3} },
  { title: 'Movie 4', image: {img4} },
];

const Carousel = () => {
  return (
    <motion.div
      className="carousel overflow-hidden whitespace-nowrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {movies.map((movie, index) => (
        <motion.div
          key={index}
          className="carousel-item inline-block mx-2"
          whileHover={{ scale: 1.1 }}
          animate={{ x: [-100, 0, 100], transition: { repeat: Infinity, duration: 5, ease: 'linear' } }}
        >
          <img src={movie.image} alt='' className="w-64 h-64 object-cover rounded-lg" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Carousel;
