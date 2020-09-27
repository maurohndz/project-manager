import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import GridOfList from '../../components/GridOfList'
import HeaderBoard from '../../components/HeaderBoard'

import { changeColorLayout } from '../../actions/appActions'
import { getBoard } from '../../actions/boardActions'
import { addList } from '../../actions/listActions'

import { Container } from './styles'

const Board = ({ board, projects, layoutColor, history: {push},match: { params }, changeColorLayout, addList, getBoard }) => {
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



  return (
    <Container>
      <HeaderBoard {...project} />
      <GridOfList
        {...board}
        addList={() => {}}
      />
    </Container>
  )
}

const mapStateToProps = ({ boardReducer: { board }, projectReducer: { projects }, appReducer }) => {
  return {
    board,
    layoutColor: appReducer.layoutColor,
    projects
  }
}
const mapDispatchToProps = {
  changeColorLayout,
  addList,
  getBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
