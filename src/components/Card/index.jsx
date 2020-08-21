import React from 'react'
import { Container, Settings } from './styles'

const Card = ({ title }) => {
  return (
    <Container>
      <h4>{title}</h4>
      <Settings size={20} />
    </Container>
  )
}

export default Card
