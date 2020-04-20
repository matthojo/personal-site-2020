import styled from 'styled-components'
import { compose, layout, space, border } from 'styled-system'

export const Logo = styled('img')(
  compose(layout, space, border)
)
