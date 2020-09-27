import React from 'react'

import List from '../List'
import NewList from '../NewList'

import { Container } from './styles'

const GridOfList = ({ lists = [], addList }) => {
  return (
    <Container>
      {
        lists.map((list) => {
          return (
            <List {...list} key={list.id} createCard={() => {}} />
          )
        })
      }
      <NewList addList={addList}/>
    </Container>
  )
}

export default GridOfList
