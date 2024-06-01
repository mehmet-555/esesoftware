module.exports = {
  content: [
    './views/**/*.ejs',
    './public/**/*.html',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', 'monospace', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'initial-gradient': 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%)',
        'hover-gradient': 'linear-gradient(133deg, rgba(33,62,242,1) 0%, rgba(255,0,0,1) 100%)'
      }
    },
  },
  plugins: [],
}