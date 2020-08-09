import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  border-radius: 15px;
  padding: 15px 20px;
  height: ${props => props.hgt ? `${props.hgt}px` : 'auto'};
  background-color: var(--soft-gray);
  display: flex;
  flex-flow: column;
`

export const ButtonSection = styled.div`
  margin-top: auto;
  height: 41px;
`
