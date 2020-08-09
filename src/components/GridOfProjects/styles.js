import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 40px 0 20px;
`

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 2em;
`

export const Title = styled.h2`
  width: 100%;
  padding: 0 0 7px 15px;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 1.1em;
  color: #424242;
`
