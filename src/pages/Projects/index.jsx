import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import InputText from '../../components/InputText'
// import { MdSearch } from 'react-icons/md'
import filter from '../../utils/filter'
import { Container, Wrapper } from './styles'
import GridOfProjects from '../../components/GridOfProjects'
import { setFavoriteProject } from '../../actions/projectActions'

const Projects = ({ projects, setFavoriteProject }) => {
  const { query, setQuery, filterData, setFilterData } = filter(projects)

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
        <GridOfProjects projects={filterData} setFavoriteProject={setFavoriteProject} />
      </Wrapper>
    </Container>
  )
}

const mapStateToProps = ({ DataReducer }) => {
  return {
    projects: DataReducer.projects
  }
}

const mapDispatchToProps = {
  setFavoriteProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
