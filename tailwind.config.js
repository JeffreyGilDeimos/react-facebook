module.exports = {
    mode: 'jit',
    purge: ['./src/pages/**/*.{js,ts,jsx,tsk}', './src/components/**/*.{js,ts,jsx,tsk}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    plugins: [require('tailwind-scrollbar-hide')],
  }