import React from 'react'
import { MdStar, MdStarBorder } from 'react-icons/md'
import { Card, Title, ContainerStar } from './styles'
import { selectBoard } from '../../actions/boardActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const CardProject = (props) => {
const {
  id,
  title = '',
  color = '',
  favorite = false,
  history,
  setFavoriteProject,
  selectBoard
} = props

  const handleFavorite = (e) => {
    e.stopPropagation()
    setFavoriteProject(id)
  }

  const redirectProject = () => {
    selectBoard(id)
    history.push(`/project/${id}`)
  }

  return (
    <Card color={color} onClick={redirectProject}>
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
  selectBoard
})(withRouter(CardProject))
