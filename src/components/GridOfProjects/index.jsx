import React, { useState } from 'react'
import CardProject from '../CardProject'
import { Grid, Title, Container, NewProject, NewProjectTitle } from './styles'
import { MdAddCircleOutline } from 'react-icons/md'
import Modal from '../Modal'

const GridOfProjects = ({ projects }) => {
  const favorite = projects.filter(item => item.favorite)
  const projectsData = projects.filter(item => !item.favorite)
  const [modal, setModal] = useState(false)

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
          <NewProject onClick={() => setModal(true)}>
            <NewProjectTitle>Create New Project</NewProjectTitle>
            <MdAddCircleOutline size={30} />
          </NewProject>
        </Grid>
      </Container>
      <Modal isOpen={modal} close={() => setModal(false)} />
    </>
  )
}

export default GridOfProjects
