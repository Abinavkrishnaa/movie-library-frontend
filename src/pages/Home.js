import React from 'react';
import MovieSearch from '../components/MovieSearch';
import Carousel from '../components/Carousel';
import { motion } from 'framer-motion';
import About from './About';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="  text-white bg-dark-bg "
    >
      <Carousel />
      <MovieSearch />
      <About />
    </motion.div>
  );
};

export default Home;
