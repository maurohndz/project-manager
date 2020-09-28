import React from 'react'

import { MdStarBorder } from 'react-icons/md'

import { Container, FavoriteContainer, Star } from './styles'

const HeaderBoard = ({ id, title, favorite, setFavorite }) => {

  return (
    <Container>
      <h2>{title}</h2>
      <FavoriteContainer onClick={() => setFavorite(id)}>
        {
          favorite
            ? <Star size={30} />
            : <MdStarBorder size={30} />
        }
      </FavoriteContainer>
    </Container>
  )
}



export default HeaderBoard
