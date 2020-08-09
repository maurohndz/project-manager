import React from 'react'
import { Container, ButtonSection } from './styles'
import { ButtonSuccess } from '../../styles/Button'

const CreateItem = ({ children }) => {
  return (
    <Container hgt='150'>
      {children}
      <ButtonSection>
        <ButtonSuccess>Save</ButtonSuccess>
      </ButtonSection>
    </Container>
  )
}

export default CreateItem
