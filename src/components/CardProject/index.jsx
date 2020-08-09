import React from 'react'
import { MdStar, MdStarBorder } from 'react-icons/md'
import { Card, Title, ContainerStar } from './styles'

const CardProject = ({ title, color, favorite }) => {
  return (
    <Card color={color.value}>
      <Title>{title}</Title>
      {
        favorite
          ? <ContainerStar fav={favorite}><MdStar /></ContainerStar>
          : <ContainerStar><MdStarBorder /></ContainerStar>
      }
    </Card>
  )
}

export default CardProject
