module.exports = {
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        thin: ['Inter', 'sans-serif']
      },
      colors: {
        "transparent": 'transparent',
        "white": "#ffffff",
        "black": "#000000",
        "mint": "#EFFFE2",
        "surface-300": "#C7C7C7",
        "surface-500": "#757575",
        "surface-700": "#414141",
        "surface-900": "#151515",
        "peach": "#fdc087",
        "orange": "#fa947b",
        "pink": "#c978a2"
      },
      gridTemplateColumns: {
        minmax: 'repeat(4, minmax(320px, 1fr))',
        "bleed-wrapper": '1fr repeat(4, minmax(320px, 1fr)) 1fr'
      },
      lineHeight: {
        "loose": "152px",
        "extra-loose": "35px",
        "loosest": "39px"
      },
      letterSpacing: {
        "tight": "-0.039em",
        "loose": "0.005em"
      }
    }
  }
}