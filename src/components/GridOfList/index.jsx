import React from 'react'
import { Container } from './styles'
import List from '../List'
import NewList from '../NewList'

const GridOfList = ({ lists, createList, createCard }) => {
  return (
    <Container>
      {
        lists.map((list) => {
          return (
            <List {...list} key={list._id} createCard={createCard} />
          )
        })
      }
      <NewList createList={createList} />
    </Container>
  )
}

export default GridOfList
