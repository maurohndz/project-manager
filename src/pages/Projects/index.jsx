import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import InputText from '../../components/InputText'
// import { MdSearch } from 'react-icons/md'
import filter from '../../utils/filter'
import { Container, Wrapper } from './styles'
import GridOfProjects from '../../components/GridOfProjects'
import Modal from '../../components/Modal'
import NewProject from '../../components/NewProject'
import { setFavoriteProject, createProject } from '../../actions/projectActions'

const Projects = ({ projects, userId, colors, createProject, setFavoriteProject }) => {
  const { query, setQuery, filterData, setFilterData } = filter(projects)
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
        <GridOfProjects projects={filterData} setFavoriteProject={setFavoriteProject} openModal={() => setModal(true)} />
        <Modal isOpen={modal} close={() => setModal(false)}>
          <NewProject colors={colors} userId={userId} createProject={createProject} close={() => setModal(false)} />
        </Modal>
      </Wrapper>
    </Container>
  )
}

const mapStateToProps = ({ DataReducer, AppReducer }) => {
  return {
    projects: DataReducer.projects,
    userId: DataReducer.user._id,
    colors: AppReducer.colors
  }
}

const mapDispatchToProps = {
  setFavoriteProject,
  createProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
