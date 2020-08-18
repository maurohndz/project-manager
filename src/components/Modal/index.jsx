import React, { createRef } from 'react'
import { createPortal } from 'react-dom'
import { Back, Container } from './styles'

const CONATINER_MODAL = document.getElementById('modal')

const Modal = ({ isOpen, close }) => {
  const ModalBack = createRef('modal-back')
  const ModalContainer = createRef('modal-container')

  if (!isOpen) {
    return null
  }

  return createPortal(
    <Back ref={ModalBack}>
      <Container ref={ModalContainer}>
        hola
      </Container>
    </Back>
    , CONATINER_MODAL)
}

export default Modal
