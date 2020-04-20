import styled from 'styled-components'
import { color, flexbox, space } from 'styled-system'

export const Flex = styled.div`
  display: flex;
  ${flexbox}
`
export const Section = styled.section`
  ${color}
  ${space}
`

export const Container = styled.div`
  width: 100%;
  max-width: ${({theme}) => theme.width.large};
  margin: 0 auto;
  ${space}
`
