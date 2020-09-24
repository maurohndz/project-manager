import styled, { css } from 'styled-components'

export const ErrorSpan = styled.span`
  color: red;
  font-size: .8em;
  display: none;

  ${props => props.error && css`{
    display: inline;
  }`}
`
