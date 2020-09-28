import React from 'react'

import { MdStar, MdStarBorder } from 'react-icons/md'

import { Card, Title, ContainerStar, CardLink } from './styles'


const CardProject = (props) => {
const {
  id,
  title = '',
  color = '',
  favorite = false,
  setFavoriteProject,
  changeColorLayout
} = props

  const handleFavorite = (e) => {
    e.stopPropagation()
    setFavoriteProject(id)
  }

  return (
    <CardLink to={`/project/${id}`}>
      <Card color={color} onClick={() => changeColorLayout(color)}>
        <Title>{title}</Title>
        {
          favorite
            ? <ContainerStar fav={favorite} onClick={handleFavorite}><MdStar /></ContainerStar>
            : <ContainerStar onClick={handleFavorite}><MdStarBorder /></ContainerStar>
        }
      </Card>
    </CardLink>
  )
}

export default CardProject
