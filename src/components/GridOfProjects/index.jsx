import React from 'react'
import CardProject from '../CardProject'
import { Grid, Title, Container } from './styles'

const GridOfProjects = ({ projects }) => {
  const favorite = projects.filter(item => item.favorite)
  const projectsData = projects.filter(item => !item.favorite)

  return (
    <>
      {favorite.length && (
        <Container>
          <Title>Favorite Projects</Title>
          <Grid>
            {
              favorite.map((project) => {
                return <CardProject key={project._id} {...project} />
              })
            }
          </Grid>
        </Container>
      )}
      <Container>
        <Title>Your Projects</Title>
        <Grid>
          {
            projectsData.map((project) => {
              return <CardProject key={project._id} {...project} />
            })
          }
        </Grid>
      </Container>
    </>
  )
}

export default GridOfProjects
