import styled from 'styled-components'

const widthColor = 45

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${`${widthColor}px`});
  grid-gap: .3em;
`

export const Item = styled.div`
  background-color: ${props => `#${props.color}`};
  width: ${`${widthColor}px`};
  height: ${`${widthColor}px`};
  ${props => props.select && css`{
    border-radius: 50%;
  }`}
`