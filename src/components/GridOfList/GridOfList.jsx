import React from 'react'

import List from '../List'
import NewList from '../NewList'

import { Container } from './styles'

const GridOfList = (props) => {
  const { lists = [] } = props
  const { addList } = props
  const { addCard } = props

  return (
    <Container>
      {
       lists.map((list) => {
          return (
            <List {...list} key={list.id} addCard={addCard} />
          )
        })
      }
      <NewList addList={addList}/>
    </Container>
  )
}

export default GridOfList
