import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import GridOfList from '../../components/GridOfList'
import { Container } from './styles'

const mock = {
  _id: '',
  userID: '',
  title: '',
  favorite: false,
  color: { value: '' },
  list: []
}

const Board = ({ projects, match: { params } }) => {
  const [project, setProject] = useState(mock)

  useEffect(() => {
    console.log('useEffect')
    projects.map((item) => {
      if (item._id === params.id) {
        setProject(item)
      }
    })
  }, [])

  return (
    <Container>
      Board
      {console.log(project)}
      <GridOfList lists={project.list} />
    </Container>
  )
}

const mapStateToProps = ({ DataReducer }) => {
  return {
    projects: DataReducer.projects
  }
}

export default connect(mapStateToProps, null)(Board)
