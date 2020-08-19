import React from 'react'
import { MdStar, MdStarBorder } from 'react-icons/md'
import { Card, Title, ContainerStar } from './styles'

const CardProject = ({ _id, title = '', color = '', favorite = false, setFavoriteProject }) => {
  const handleFavorite = (e) => {
    e.stopPropagation()
    setFavoriteProject(_id)
  }
  return (
    <Card color={color.value}>
      <Title>{title}</Title>
      {
        favorite
          ? <ContainerStar fav={favorite} onClick={handleFavorite}><MdStar /></ContainerStar>
          : <ContainerStar onClick={handleFavorite}><MdStarBorder /></ContainerStar>
      }
    </Card>
  )
}

export default CardProject
