import React, { createRef } from 'react'
import { createPortal } from 'react-dom'
// import { MdHighlightOff } from 'react-icons/md'
import { Back, Container, CloseBtn } from './styles'

const CONATINER_MODAL = document.getElementById('modal')

const Modal = ({ isOpen, close, children }) => {
  const ModalBack = createRef('modal-back')
  const ModalContainer = createRef('modal-container')

  if (!isOpen) {
    return null
  }

  return createPortal(
    <Back ref={ModalBack}>
      <Container ref={ModalContainer}>
        <CloseBtn size={30} onClick={close} />
        {children}
      </Container>
    </Back>
    , CONATINER_MODAL)
}

export default Modal
