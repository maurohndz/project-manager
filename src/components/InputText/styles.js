import styled, { css } from 'styled-components'

export const Input = styled.input`
  width: 100%;
  max-width: 550px;
  display: block;
  padding: 8px 15px;
  border: 1.2px solid #d3d3d3;
  border-radius: 5px;
  outline: none;
  
  &::placeholder {
    color: #afafaf;
  }

  ${props => props.animation && css`{
    width: 250px;
    transition: .3s;
    &:focus{
      width: 450px;
    }
  }`}

  ${props => (props.position === 'right') && css`{
    margin-left: auto;
  }`}
  ${props => (props.position === 'left') && css`{
    margin-right: auto;
  }`}
  ${props => !props.position && css`{
    margin: 0 auto;
  }`}
`
