import React from 'react'
import Layout from './components/Layout'
import Projects from './pages/Projects'
import Board from './pages/Board'
import { GlobalStyle } from './styles/GobalStyle'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path='/' component={() => <h1>Home</h1>} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/project/:id' component={Board} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
