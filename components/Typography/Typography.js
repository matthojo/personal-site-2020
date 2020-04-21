import styled from 'styled-components'
import { space } from 'styled-system'

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  ${space};
`

export const P = styled.p`
  font-size: 1.1rem;
`

export const A = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  color: inherit;
  padding-bottom: ${({ theme }) => theme.space[1] }px;
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.colors.purple };
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.purple };
    box-shadow: inset 0 -3px 0 0 ${({ theme }) => theme.colors.purple };
  }
`

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  display: inline-block;
  margin-right: ${({ theme }) => theme.space[3] }px;
  ${space};
`
