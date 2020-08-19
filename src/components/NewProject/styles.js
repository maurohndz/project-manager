import styled, { css } from 'styled-components'

const widthColor = 45

export const Container = styled.form`
  width: 100%;
`

export const Group = styled.div`
  margin-bottom: 15px;
`

export const Title = styled.h2`
  color: #605f5f;
`

export const Label = styled.label`
  margin-bottom: 13px;
  font-size: .89em;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  display: block;
  padding-left: 5px;
`

export const GridColors = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${`${widthColor}px`});
  grid-gap: .3em;
`

export const ColorContent = styled.div`
  background-color: ${props => `#${props.color}`};
  width: ${`${widthColor}px`};
  height: ${`${widthColor}px`};
  ${props => props.select && css`{
    border-radius: 50%;
  }`}
`
