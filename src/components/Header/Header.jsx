import React from 'react'
import ProfileNav from '../ProfileNav'
import Icon from '../../../public/assets/img/icon-32.png'
import { Container, Logo, Navbar, ItemNav } from './styles'
import { Link } from 'react-router-dom'

const Header = ({ changeColorLayout }) => {
  return (
    <Container>
      <Navbar>

        <ItemNav>
          <Link
            to='/'
            onClick={() => changeColorLayout(null)}
          >ProjectsHome
          </Link>
        </ItemNav>

        <ItemNav>
          <Link
            to='/projects'
            onClick={() => changeColorLayout(null)}
          >Projects
          </Link>
        </ItemNav>

      </Navbar>

      <Logo to='/'>
        <img src={Icon} alt='Project Manager Logo' />
        <h2 className='headerOne'>Project</h2><h2 className='headerTwo'>Manager</h2>
      </Logo>
      
      <ProfileNav />
    </Container>
  )
}

export default Header
