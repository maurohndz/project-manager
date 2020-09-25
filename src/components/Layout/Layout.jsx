import React, { useEffect } from 'react'
import Header from '../Header/index'

import { Container } from './styles.js'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { changeColorLayout } from '../../actions/appActions'

const Layout = ({ children, layoutColor, location: { pathname }, changeColorLayout }) => {
  useEffect(() => {
    if (pathname === '/' || pathname === '/projects') {
      changeColorLayout(null)
    }
  }, [pathname])

  return (
    <Container layoutColor={layoutColor}>
      <Header changeColorLayout={changeColorLayout} />
      {children}
    </Container>
  )
}

const mapStateToProps = ({ appReducer:{ layoutColor } }) => {
  return {
    layoutColor
  }
}
const mapDispatchToProps = {
  changeColorLayout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout))
