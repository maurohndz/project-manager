import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import InputText from '../../components/InputText'
import useFilter from '../../hooks/useFilter.js'
import GridOfProjects from '../../components/GridOfProjects'
import Modal from '../../components/Modal'
import NewProject from '../../components/NewProject'

import { addProject, getProjects, setFavorite } from '../../actions/projectActions'

import { Container, Wrapper } from './styles'


const Projects = ({ projects = [], userId = '', addProject, getProjects, setFavorite }) => {

  const { query, setQuery, filterData, setFilterData } = useFilter(projects)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if(projects.length === 0){
      getProjects()
    }
  }, [])

  useEffect(() => {
    console.log(projects)
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
          setFavoriteProject={setFavorite}
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
  addProject,
  getProjects,
  setFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
