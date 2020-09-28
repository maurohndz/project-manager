import React from 'react'
import { Container, TitleList, Cards } from './styles'
import NewCard from '../NewCard'
import Card from '../Card'

const List = (props) => {
  const { id, title, cards } = props
  const { addCard } = props

  const handleAddCard = (data) => {
    addCard(id, data)
  }

  return (
    <Container>
      <TitleList>{title}</TitleList>
      {
        cards.length > 0 &&
          <Cards>
            {
              cards.map((item) => {
                return <Card key={item.id} {...item} />
              })
            }
          </Cards>
      }
      <NewCard addCard={handleAddCard} />
    </Container>
  )
}

export default List
