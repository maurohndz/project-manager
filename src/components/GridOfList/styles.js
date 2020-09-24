import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`
