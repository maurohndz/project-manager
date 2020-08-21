import React from 'react'
import { MdStar, MdStarBorder } from 'react-icons/md'
import { Card, Title, ContainerStar } from './styles'
import { changeBoardColor } from '../../actions/appActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const CardProject = ({ _id, title = '', color = '', favorite = false, history, setFavoriteProject, changeBoardColor }) => {
  const handleFavorite = (e) => {
    e.stopPropagation()
    setFavoriteProject(_id)
  }
  const redirectProject = () => {
    changeBoardColor(color)
    history.push(`/project/${_id}`)
  }

  return (
    <Card color={color.value} onClick={redirectProject}>
      <Title>{title}</Title>
      {
        favorite
          ? <ContainerStar fav={favorite} onClick={handleFavorite}><MdStar /></ContainerStar>
          : <ContainerStar onClick={handleFavorite}><MdStarBorder /></ContainerStar>
      }
    </Card>
  )
}

export default connect(null, {
  changeBoardColor
})(withRouter(CardProject))
