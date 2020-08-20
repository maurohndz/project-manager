import React, { useEffect } from 'react'
import Header from '../Header/index'
import { Container } from './styles.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changeBoardColor } from '../../actions/appActions'

const Layout = ({ children, boardColor, location: { pathname }, changeBoardColor }) => {
  useEffect(() => {
    if (pathname === '/' || pathname === '/projects') {
      changeBoardColor({ value: null })
    }
  }, [pathname])

  return (
    <Container boardColor={boardColor}>
      <Header />
      {children}
    </Container>
  )
}

const mapStateToProps = ({ DataReducer }) => {
  return {
    boardColor: DataReducer.boardColor
  }
}
const mapDispatchToProps = {
  changeBoardColor
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout))
