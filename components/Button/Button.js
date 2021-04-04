import styled from 'styled-components'
import { color, flexbox, space } from 'styled-system'

export const Button = styled.button`
  ${color}
  border-radius: 50px;
  padding: 15px 20px;
  text-decoration: none;
  color: white;
  display: ${({ block }) => block ? 'block' : 'inline-block'};
  background: ${({theme}) => theme.colors.green};

  &:hover {
    background: ${({theme}) => theme.colors.darkGreen};
  }
`
export const ButtonGlow = styled.button`
  position: relative;
  z-index: 1;
  ${color}
  height: 3em;
  padding: 0;
  border-radius: 50px;
  text-decoration: none;
  color: ${({theme}) => theme.components.themeButtonText};
  display: inline-block;
  
  span {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    padding: 10px 15px;
    background: ${({theme}) => theme.components.themeButton};
  }

  &:hover {
    background: ${({theme}) => theme.components.themeButton};

    span {
      cursor: pointer;
      color: ${({theme}) => theme.components.themeButtonHover};
    }
  }

  &:active, &:focus {
    outline: none;

    span {
      box-shadow: 0 0 3pt 2pt ${({theme}) => theme.components.themeButtonHover};
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    height: calc(100% + 10px);
    width: calc(100% + 10px);
    background: radial-gradient(
      circle,
      #f99ecb 0%,
      #49d3d1 50%,
      #606bc1 100%
    );
    border-radius: 50px;
    background-size: 200% 200%;
    z-index: 0;
    animation: animatedgradient 5s linear infinite;
  }

  &::before {
    filter: blur(30px) contrast(3);
  }
`
// .animLine:hover {
//   transform: scale(1);
//   box-shadow: 0 2px 4px #000, 0 8px 32px rgba(0, 0, 0, 0.5);
// }
