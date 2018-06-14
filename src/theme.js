const ColorPalette = {
  aqua: {
    base: '#bee6e6'
  },
  black: {
    base: '#000000'
  },
  blue: {
    lighter: '#009de0',
    light: '#0090ce',
    base: '#0055a0'
  },
  green: {
    light: '#78be20',
    base: '#629c19'
  },
  grey: {
    dark: '#404040',
    base: '#737373',
    medium: '#a6a6a6',
    light: '#d9d9d9',
    lighter: '#f6f6f6'
  },
  orange: {
    base: '#F5A623'
  },
  purple: {
    base: '#aa3787'
  },
  red: {
    base: '#d40012'
  },
  white: {
    base: '#ffffff'
  },
  yellow: {
    base: '#ffdc00'
  }
}

export const colors = {
  primary: '#7350FF',
  primaryHover: ColorPalette.green.base,
  secondary: ColorPalette.blue.light,
  secondaryHover: ColorPalette.blue.base,
  alternate: ColorPalette.grey.base,
  alternateHover: ColorPalette.grey.medium,
  accent: 'rgb(248, 248, 248)',
  secondaryAccent: 'rgb(227, 244, 254)',
  alternateAccent: ColorPalette.grey.lighter,
  text: 'rgb(127, 144, 154)',
  primaryText: '#FFFFFF',
  secondaryText: 'rgb(74, 74, 100)',
  alternateText: ColorPalette.blue.light,
  canvas: ColorPalette.white.base,
  border: ColorPalette.grey.light,
  disabled: ColorPalette.grey.light,
  shadow: ColorPalette.black.base
}

export const breakpoints = [32, 48, 64, 80].map(n => n + 'em')

export const space = [0, 4, 8, 16, 32, 64, 128]

export const fontSizes = [12, 14, 17, 20, 24, 32, 48, 64, 72, 96]

const fontCollection = {
  Rubik: {
    family: `'Rubik', sans-serif`,
    normal: 400,
    bold: 700,
    size: fontSizes[2],
    lineHeight: 1.5,
    letterSpacing: 0
  }
}

export const typographyStyles = {
  title: fontCollection.system,
  headline: { ...fontCollection.Rubik, size: fontSizes[5], weight: 'bold' },
  body: fontCollection.Rubik,
  callout: fontCollection.system,
  subhead: { ...fontCollection.Rubik, size: fontSizes[4], weight: 'bold' },
  footnote: { ...fontCollection.Rubik, size: fontSizes[0] },
  label: {
    ...fontCollection.Rubik,
    size: fontSizes[0],
    weight: 'bold',
    letterSpacing: 0.4
  },
  caption: fontCollection.times
}

export const radii = [0, 2, 4]

export const fontWeights = {
  normal: 300,
  bold: 500
}

export const shadows = ['none', '0 10px 30px 0 rgba(0,0,0,.07)']

export default {
  breakpoints,
  space,
  typographyStyles,
  fontSizes,
  fontWeights,
  colors,
  radii,
  shadows
}
