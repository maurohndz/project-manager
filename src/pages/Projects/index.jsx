import React from 'react'
import { connect } from 'react-redux'
import { Container } from './styles'

const Projects = ({ projects }) => {
  return (
    <Container>
      {console.log(projects)}
      Projects
    </Container>
  )
}

const mapStateToProps = ({ DataReducer }) => {
  return {
    projects: DataReducer.projects
  }
}

export default connect(mapStateToProps, null)(Projects)
