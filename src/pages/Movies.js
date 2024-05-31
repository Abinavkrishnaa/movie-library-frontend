import React from 'react';
import { motion } from 'framer-motion';

const Movies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto text-white bg-dark-bg"
    >
      <section id="movies">
        <h2 className="text-3xl font-bold">Movies</h2>
        <p>This is the movies section.</p>
      </section>
    </motion.div>
  );
};

export default Movies;
