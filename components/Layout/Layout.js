import styled from 'styled-components'
import { background, color, flexbox, space, typography } from 'styled-system'

export const Flex = styled.div`
  display: flex;
  ${flexbox}
`
export const Section = styled.section`
  ${background}
  ${color}
  ${space}
`

export const Container = styled.div`
  width: 100%;
  max-width: ${({theme}) => theme.width.large};
  margin: 0 auto;
  ${space}
  ${typography}
`
