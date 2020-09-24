import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbar = styled.ul`
  display: flex;
  flex: 1;
`

export const ItemNav = styled.li`
  list-style: none;
  margin-right: 15px;

  & a{
    text-decoration: none;
    font-size: .9em;
    font-weight: 700;
    color:var(--ligth);

  }
`

export const Container = styled.header`
  width: 100%;
  height: 9.5vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
  z-index: 100;
  ${props => props.project && css`{
    background-color: rgba(0, 0, 0, .2)
  }`}
`

export const Logo = styled(Link)`
  flex: 1;
  margin: auto;
  font-size: 1em;
  text-decoration: none;
  font-family: 'Sriracha', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ligth);
`
