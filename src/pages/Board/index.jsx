import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import GridOfList from '../../components/GridOfList'
import { Container } from './styles'
import { changeBoardColor } from '../../actions/appActions'
import HeaderBoard from '../../components/HeaderBoard'
import { setFavoriteProject, createList } from '../../actions/projectActions'

const mock = {
  _id: '',
  userID: '',
  title: '',
  favorite: false,
  color: { value: '' },
  list: []
}

const Board = ({ projects, match: { params }, userID, changeBoardColor, boardColor, setFavoriteProject, createList }) => {
  const [project, setProject] = useState(mock)

  useEffect(() => {
    projects.map((item) => {
      if (item._id === params.id) {
        setProject(item)
        if (!boardColor) {
          changeBoardColor(item.color)
        }
      }
    })
  }, [projects])

  const handleCreateList = (data) => {
    createList({
      ...data,
      projectID: project._id,
      userID: userID
    })
  }

  return (
    <Container>
      <HeaderBoard
        title={project.title}
        favorite={project.favorite}
        idProject={project._id}
        changeFavorite={setFavoriteProject}
      />
      <GridOfList lists={project.list} createList={handleCreateList} />
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
  changeBoardColor,
  setFavoriteProject,
  createList
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
