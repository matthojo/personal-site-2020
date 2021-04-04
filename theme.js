import { colorStyle } from "styled-system";

export const base = {
  width: {
    large: '720px'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
    neonBlue: '#0ff',
    grey: '#e5e5e5',
    orange: '#FF6C11',
    gold: '#fca311',
    green: '#007303',
    darkGreen: '#09540b',
    purple: '#5e00c5',
    midnight: '#020024',
    midnightTrans: 'rgba(2,0,36,0.9)',
    fuchsia: 'rgba(255,0,159,1)'
  }
}

export const light = {
  width: base.width,
  space: base.space,
  components: {
    body: base.colors.white,
    text: base.colors.black,
    link: base.colors.purple,
    logo: base.colors.black,
    client: base.colors.white,
    logoBg: 'transparent',
    bgOverlay: base.colors.white,
    themeButton: base.colors.midnight,
    themeButtonHover: base.colors.neonBlue,
    themeButtonText: base.colors.white
  }
}

export const dark = {
  width: base.width,
  space: base.space,
  components: {
    body: base.colors.midnight,
    text: base.colors.white,
    link: base.colors.fuchsia,
    logo: base.colors.white,
    client: base.colors.white,
    logoBg: base.colors.neonBlue,
    bgOverlay: base.colors.midnightTrans,
    themeButton: base.colors.white,
    themeButtonHover: base.colors.purple,
    themeButtonText: base.colors.midnight
  }
}

export default {
  light, 
  dark
}
