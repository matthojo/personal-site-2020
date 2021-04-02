import { createGlobalStyle } from 'styled-components'
import { base, dark } from '../../theme'
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-size: 16px;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  }

  body.dark {
    background: ${dark.components.body};
    color: ${dark.components.text};
  }

  .dark .retroness {
    position: relative;
    background: linear-gradient(0deg, rgba(2,0,36,1) 16%, rgba(161,29,159,1) 36%, rgba(234,148,235,1) 52%, rgba(247,220,255,1) 59%, rgba(128,83,161,1) 59%, rgba(110,43,154,1) 59%, rgba(2,0,36,1) 68%);
    perspective: 45em;
    overflow: hidden;
    box-shadow:
    inset 0 15px 20px -20px ${base.colors.white},      /* inner white */
    inset 0 -15px 20px -20px ${base.colors.white},      /* inner white */
    inset 0 24px 20px -25px ${base.colors.fuchsia},   /* inner left magenta short */
    inset 0 -24px 20px -25px ${base.colors.neonBlue},  /* inner right cyan short */
    0 0 15px 2px ${base.colors.white},            /* outer white */
    0 -10px 15px ${base.colors.fuchsia},        /* outer left magenta */
    0 10px 25px ${base.colors.neonBlue};         /* outer right cyan */
    
    &::after, &::before {
      content: '';
      position: absolute;
      left: -25%;
      top: 20%;
      width: 170%;
      height: 100%;
      background-image: linear-gradient(rgba(249,158,248,1) .1em, transparent .1em), linear-gradient(90deg, rgba(249,158,248,1) .1em, transparent .1em);
      background-size: 3em 3em;
      transform: rotateY(0deg) rotateX(60deg);
      animation: slide 20s linear infinite;
      mix-blend-mode: soft-light;
      pointer-events: none;
    }
    
    &::before {
      filter: blur(4px);
    }
  }
  
  @keyframes slide {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }
`
