import React from 'react'
import { withRouter } from 'react-router-dom'

import { MdStar, MdStarBorder } from 'react-icons/md'

import {  } from '../../actions/boardActions'
import { connect } from 'react-redux'

import { Card, Title, ContainerStar } from './styles'


const CardProject = (props) => {
const {
  id,
  title = '',
  color = '',
  favorite = false,
  history,
  setFavoriteProject,
} = props

  const handleFavorite = (e) => {
    e.stopPropagation()
    setFavoriteProject(id)
  }

  const redirectProject = () => {
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
})(withRouter(CardProject))
