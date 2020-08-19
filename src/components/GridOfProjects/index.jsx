import React, { useState } from 'react'
import CardProject from '../CardProject'
import { Grid, Title, Container, NewProjectCard, NewProjectTitle } from './styles'
import { MdAddCircleOutline } from 'react-icons/md'
import Modal from '../Modal'
import NewProject from '../NewProject'

const GridOfProjects = ({ projects, setFavoriteProject }) => {
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
                return <CardProject key={project._id} {...project} setFavoriteProject={setFavoriteProject} />
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
              return <CardProject key={project._id} {...project} setFavoriteProject={setFavoriteProject} />
            })
          }
          <NewProjectCard onClick={() => setModal(true)}>
            <NewProjectTitle>Create New Project</NewProjectTitle>
            <MdAddCircleOutline size={30} />
          </NewProjectCard>
        </Grid>
      </Container>
      <Modal isOpen={modal} close={() => setModal(false)}>
        <NewProject />
      </Modal>
    </>
  )
}

export default GridOfProjects
