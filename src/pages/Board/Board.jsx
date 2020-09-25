import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import GridOfList from '../../components/GridOfList'
import { Container } from './styles'
import { changeColorLayout } from '../../actions/appActions'
import HeaderBoard from '../../components/HeaderBoard'
import { setFavoriteProject, createList, createCard } from '../../actions/projectActions'

const mock = {
  _id: '',
  userID: '',
  title: '',
  favorite: false,
  color: { value: '' },
  list: []
}

const Board = (props) => {
  const {
    
  } = props
  const [project, setProject] = useState(mock)

  

  return (
    <Container>
      <HeaderBoard
        title={project.title}
        favorite={project.favorite}
        idProject={project._id}
        changeFavorite={() => {}}
      />
      <GridOfList
        lists={project.list}
        createList={() => {}}
        createCard={() => {}}
      />
    </Container>
  )
}

const mapStateToProps = ({ DataReducer }) => {
  return {
    projects: DataReducer.projects,
    boardColor: DataReducer.boardColor,
    userID: DataReducer.user._id
  }
}
const mapDispatchToProps = {
  changeColorLayout,
  setFavoriteProject,
  createList,
  createCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
