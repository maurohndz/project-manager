import React from 'react'
import Header from '../Header/index'
import { Container } from './styles.js'

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default Layout
