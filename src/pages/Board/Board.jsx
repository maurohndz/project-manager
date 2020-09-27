import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import GridOfList from '../../components/GridOfList'
import HeaderBoard from '../../components/HeaderBoard'

import { changeColorLayout } from '../../actions/appActions'
import { addList } from '../../actions/listActions'

import { Container } from './styles'

const Board = ({ boardSelect, projects, layoutColor, match: { params }, changeColorLayout, addList }) => {
   const [project, setProject] = useState({})
  
  useEffect(() => { 
    let selectProject = projects.find( item => item.id === params.id)
    setProject(selectProject)

    if(!layoutColor){
      changeColorLayout(selectProject.color)
    }
    
  }, [projects])



  return (
    <Container>
      <HeaderBoard {...project} />
      <GridOfList
        {...boardSelect}
        addList={addList}
      />
    </Container>
  )
}

const mapStateToProps = ({ boardReducer: { boardSelect }, projectReducer: { projects }, appReducer }) => {
  return {
    boardSelect,
    layoutColor: appReducer.layoutColor,
    projects
  }
}
const mapDispatchToProps = {
  changeColorLayout,
  addList
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
