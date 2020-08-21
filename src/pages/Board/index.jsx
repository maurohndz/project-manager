import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import GridOfList from '../../components/GridOfList'
import { Container } from './styles'
import { changeBoardColor } from '../../actions/appActions'
import HeaderBoard from '../../components/HeaderBoard'
import { setFavoriteProject } from '../../actions/projectActions'

const mock = {
  _id: '',
  userID: '',
  title: '',
  favorite: false,
  color: { value: '' },
  list: []
}

const Board = ({ projects, match: { params }, changeBoardColor, boardColor, setFavoriteProject }) => {
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

  return (
    <Container>
      <HeaderBoard
        title={project.title}
        favorite={project.favorite}
        idProject={project._id}
        changeFavorite={setFavoriteProject}
      />
      <GridOfList lists={project.list} />
    </Container>
  )
}

const mapStateToProps = ({ DataReducer }) => {
  return {
    projects: DataReducer.projects,
    boardColor: DataReducer.boardColor
  }
}
const mapDispatchToProps = {
  changeBoardColor,
  setFavoriteProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
