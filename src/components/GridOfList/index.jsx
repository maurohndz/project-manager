import React from 'react'
import { Container } from './styles'
import CardList from '../CardList'
import NewList from '../NewList'

const GridOfList = ({ lists }) => {
  return (
    <Container>
      {
        lists.map((list) => {
          return (
            <CardList {...list} key={list._id} />
          )
        })
      }
      <NewList />
    </Container>
  )
}

export default GridOfList
