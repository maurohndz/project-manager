import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'



import { changeColorLayout } from '../../actions/appActions'
import { getBoard } from '../../actions/boardActions'
import { addList } from '../../actions/listActions'

import { Container } from './styles'

const Board = ({ board, projects, layoutColor, history: {push},match: { params }, changeColorLayout, loading ,addList, getBoard }) => {
   const [project, setProject] = useState({})
  
  useEffect(() => { 
    if(projects.length === 0){
      push('/projects')
      return
    }
    let selectProject = projects.find( item => item.id === params.id)
    setProject(selectProject)

    getBoard(selectProject.boardId, selectProject.color) 
  }, [projects])

  useEffect(() => {
    if(projects.length === 0){
      push('/projects')
      return
    }
  }, [])

  const handleAddList = (list) => {
    addList({
      boardId: board.id,
      ...list
    })
  }

  return (
    <Container>
      {console.log(loading)}
      <HeaderBoard {...project} />
      <GridOfList
        lists={board.lists}
        addList={handleAddList}
      />
    </Container>
  )
}

const mapStateToProps = ({ boardReducer: { board }, projectReducer: { projects }, appReducer }) => {
  return {
    board,
    layoutColor: appReducer.layoutColor,
    loading: appReducer.loading,
    projects
  }
}
const mapDispatchToProps = {
  changeColorLayout,
  addList,
  getBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
