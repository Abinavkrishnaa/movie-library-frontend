module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'dark-gradient-start': '#333',
        'dark-gradient-end': '#000',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
