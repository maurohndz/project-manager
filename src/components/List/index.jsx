import React from 'react'
import { Container, TitleList, Cards } from './styles'
import NewCard from '../NewCard'
import Card from '../Card'

const List = ({ title, cards, createCard, _id }) => {
  const handleCreateCard = (data) => {
    createCard({
      ...data,
      listID: _id
    })
  }

  return (
    <Container>
      <TitleList>{title}</TitleList>
      {
        cards.length > 0 &&
          <Cards>
            {
              cards.map((item) => {
                return <Card key={item._id} {...item} />
              })
            }
          </Cards>
      }
      <NewCard createCard={handleCreateCard} />
    </Container>
  )
}

export default List
