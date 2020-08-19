import styled, { keyframes } from 'styled-components'
import { MdHighlightOff } from 'react-icons/md'

export const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`

const slide = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`

export const Container = styled.div`
  width: 95%;
  max-width: 530px;
  height: 100vh;
  background-color: var(--soft-gray);
  padding: 2em;
  transition: .1s;
  animation: ${slide} .4s linear;
  position: relative;
`

export const CloseBtn = styled(MdHighlightOff)`
  cursor: pointer;
  /* position: absolute; */
  color: var(--dark-gray);
`
