import styled from 'styled-components'
import { compose, layout, space, border } from 'styled-system'

export const Logo = styled('div')`
  ${compose(layout, space, border)}
  position: relative;

  svg {
    position: relative;
    z-index: 2;
    width: 100%;
    fill: ${({ theme }) => theme.components.logo };
  }

  &::before, &::after {
    content: '';
    position: absolute;
    z-index: 0;
    width: 0;
    height: 0;
    border-style: solid;
    transform: rotate(10deg)
  }

  &::before {
    top: 0;
    left: 0;
    border-width: 0 70px 56px 35px;
    border-color: transparent transparent ${({ theme }) => theme.components.logoBg } transparent;
  }

  &::after {
    top: 4px;
    left: 4px;
    border-width: 0 67px 51px 32px;
    border-color: transparent transparent ${({ theme }) => theme.components.body } transparent;
  }

`
  
