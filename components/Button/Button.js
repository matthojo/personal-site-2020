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
