import React from 'react'
import { MdStar, MdStarBorder } from 'react-icons/md'
import { Card, Title, ContainerStar, CardLink } from './styles'
import { changeBoardColor } from '../../actions/appActions'
import { connect } from 'react-redux'

const CardProject = ({ _id, title = '', color = '', favorite = false, setFavoriteProject, changeBoardColor }) => {
  const handleFavorite = (e) => {
    e.stopPropagation()
    setFavoriteProject(_id)
  }
  return (
    <CardLink to={`/project/${_id}`} onClick={() => changeBoardColor(color)}>
      <Card color={color.value}>
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

export default connect(null, {
  changeBoardColor
})(CardProject)
