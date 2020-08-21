import React from 'react'
import { Container, TitleList, Cards } from './styles'
import NewCard from '../NewCard'
import Card from '../Card'

const List = ({ title, cards }) => {
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
      <NewCard />
    </Container>
  )
}

export default List
