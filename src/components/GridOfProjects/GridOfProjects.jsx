import React from 'react'

import CardProject from '../CardProject'

import { MdAddCircleOutline } from 'react-icons/md'

import { Grid, Title, Container, NewProjectCard, NewProjectTitle } from './styles'

const GridOfProjects = (props) => {  
  const { projects, setFavoriteProject, changeColorLayout, openModal } = props

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
                  return <CardProject 
                          key={project.id}
                          {...project}
                          setFavoriteProject={setFavoriteProject}
                          changeColorLayout={changeColorLayout}
                        />
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
              return <CardProject 
                      key={project.id}
                      {...project}
                      setFavoriteProject={setFavoriteProject}
                      changeColorLayout={changeColorLayout}
                    />
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
