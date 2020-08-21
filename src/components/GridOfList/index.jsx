import React from 'react'
import { Container } from './styles'
import List from '../List'
import NewList from '../NewList'

const GridOfList = ({ lists, createList }) => {
  return (
    <Container>
      {
        lists.map((list) => {
          return (
            <List {...list} key={list._id} />
          )
        })
      }
      <NewList createList={createList} />
    </Container>
  )
}

export default GridOfList
