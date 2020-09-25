import styled, { css } from 'styled-components'
import { getColor } from '../../utils/colors'

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(90deg,var(--blue-back) 0%, var(--purple-back) 100%);

  ${props => props.layoutColor && css`{
    background: ${props => `#${getColor(props.layoutColor)}`} !important;
  }`}
`
