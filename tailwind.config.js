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
        'hover-gradient': 'linear-gradient(133deg, rgba(33,62,242,1) 0%, rgba(255,0,0,1) 100%)',
        'bg-ai': "url(/images/ai2.png)"
      },
      spacing: {
        "word-wide" : "1px",
        "word-wider" : "2px",
        "word-widest" : "4px",
      },
      translate: {
        'centery': '-50%',
        'centerx': '0%',
      },
      screens: {
        'xxxs': "320px",
        'xxs': '360px',
        'xs': '480px'
      }
    },
  },
  plugins: [],
}