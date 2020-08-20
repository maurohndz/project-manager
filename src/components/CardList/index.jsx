import React from 'react'
import { Container, TitleList } from './styles'
import NewCard from '../NewCard'

const CardList = ({ title }) => {
  return (
    <Container>
      <TitleList>{title}</TitleList>
      <NewCard />
    </Container>
  )
}

export default CardList
