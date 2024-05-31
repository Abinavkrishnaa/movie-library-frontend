import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto text-white bg-dark-bg"
    >
      <section id="about">
        <h2 className="text-3xl font-bold">About</h2>
        <p>This is the about section.</p>
      </section>
    </motion.div>
  );
};

export default About;
