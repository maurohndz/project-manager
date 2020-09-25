import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import InputText from '../../components/InputText'
import useFilter from '../../hooks/useFilter.js'
import { Container, Wrapper } from './styles'
import GridOfProjects from '../../components/GridOfProjects'
import Modal from '../../components/Modal'
import NewProject from '../../components/NewProject'
import { setFavoriteProject, addProject } from '../../actions/projectActions'

const Projects = ({ projects, userId, addProject, setFavoriteProject }) => {
  const { query, setQuery, filterData, setFilterData } = useFilter(projects)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    setFilterData(projects)
  }, [projects])

  return (
    <Container>
      <Wrapper>
        <InputText
          placeholder='Search projects'
          query={query}
          setQuery={setQuery}
          position='right'
          name='Search projects'
          animation
        />
        <GridOfProjects
          projects={filterData}
          setFavoriteProject={setFavoriteProject}
          openModal={() => setModal(true)}
        />
        <Modal isOpen={modal} close={() => setModal(false)}>
          <NewProject
            userId={userId}
            addProject={addProject}
            close={() => setModal(false)}
          />
        </Modal>
      </Wrapper>
    </Container>
  )
}

const mapStateToProps = ({ projectReducer, userReducer }) => {
  return {
    projects: projectReducer.projects,
    userId: userReducer.id,
  }
}

const mapDispatchToProps = {
  setFavoriteProject,
  addProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
