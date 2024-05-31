import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
    setResults(data.Search || []);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200"
          placeholder="Search for a movie"
        />
        <button type="submit" className="w-full p-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {results.map((movie) => (
          <motion.div
            key={movie.imdbID}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-lg text-white mt-2">{movie.Title}</h3>
            <p className="text-gray-400">{movie.Year}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MovieSearch;
