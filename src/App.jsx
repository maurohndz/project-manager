import React from 'react'
import Layout from './components/Layout'
import Projects from './pages/Projects'
import { GlobalStyle } from './styles/GobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Projects />
      </Layout>
    </>
  )
}

export default App
