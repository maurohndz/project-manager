import React from 'react'
import CardProject from '../CardProject'
import { Grid, Title, Container, NewProjectCard, NewProjectTitle } from './styles'
import { MdAddCircleOutline } from 'react-icons/md'

const GridOfProjects = ({ projects, setFavoriteProject, openModal }) => {
  const favorite = projects.filter(item => item.favorite)
  const projectsData = projects.filter(item => !item.favorite)

  return (
    <>
      {
        favorite.length > 0 &&
          <Container>
            <Title>Favorite Projects</Title>
            <Grid>
              {
                favorite.map((project) => {
                  return <CardProject key={project._id} {...project} setFavoriteProject={setFavoriteProject} />
                })
              }
            </Grid>
          </Container>
      }
      <Container>
        <Title>Your Projects</Title>
        <Grid>
          {
            projectsData.map((project) => {
              return <CardProject key={project._id} {...project} setFavoriteProject={setFavoriteProject} />
            })
          }
          <NewProjectCard onClick={openModal}>
            <NewProjectTitle>Create New Project</NewProjectTitle>
            <MdAddCircleOutline size={30} />
          </NewProjectCard>
        </Grid>
      </Container>
    </>
  )
}

export default GridOfProjects
