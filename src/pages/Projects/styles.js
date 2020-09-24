import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 90.5vh;
  padding: 20px;
  background-color: var(--ligth);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`
export const Wrapper = styled.div`
  width: 70%;
  margin: auto;

  @media (max-width: 900px){
    width: 85%;
  }
`
