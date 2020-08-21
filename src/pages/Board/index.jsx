import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import GridOfList from '../../components/GridOfList'
import { Container } from './styles'
import { changeBoardColor } from '../../actions/appActions'

const mock = {
  _id: '',
  userID: '',
  title: '',
  favorite: false,
  color: { value: '' },
  list: []
}

const Board = ({ projects, match: { params }, changeBoardColor, boardColor }) => {
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
  }, [])

  return (
    <Container>
      Board
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
  changeBoardColor
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
