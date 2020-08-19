import React from 'react'
import ProfileNav from '../ProfileNav'
import Icon from '../../../public/assets/img/icon-32.png'
import { Container, Logo, Navbar, ItemNav } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
      <Navbar>
        <ItemNav> <Link to='/'>Home</Link> </ItemNav>
        <ItemNav> <Link to='/projects'>Projects</Link> </ItemNav>
      </Navbar>
      <Logo href='#'>
        <img src={Icon} alt='Project Manager Logo' />
        <h2 className='headerOne'>Project</h2><h2 className='headerTwo'>Manager</h2>
      </Logo>
      <ProfileNav />
    </Container>
  )
}

export default Header
