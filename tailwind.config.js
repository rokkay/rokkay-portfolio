module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // },
    purge: {
      enabled: false,
      layers: ['components', 'utilities'],
      content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
    },
    theme: {
      extend: {
        colors: {
          rokkay: '#345123',
        },
      },
    },
    variants: {},
    plugins: [],
  },
}
