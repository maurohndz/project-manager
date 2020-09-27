import React, { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'

import GridOfList from '../../components/GridOfList'
import HeaderBoard from '../../components/HeaderBoard'

import { getBoard } from '../../actions/boardActions'
import { setFavorite } from '../../actions/projectActions'
import { addList } from '../../actions/listActions'

import { Container } from './styles'

const Board = (props) => {
	const { loading } = props.appReducer
	const { projects } = props.projectReducer
	const { lists, boardId } = props.boardReducer.board
	const { 
		history: { push },
		match: { params },
		getBoard,
		setFavorite,
		addList
	} = props


  const [project, setProject] = useState({})

  useEffect(() => {
  	if (projects.length === 0) {
  		push('/projects')
      return
  	}

  	let selectProject = projects.find( item => item.id === params.id)

  	getBoard(selectProject.boardId)
  	setProject(selectProject)
  }, [])

  const handleAddList = (list) => {
  	addList(boardId, list)
  }

  return (  
  	<Fragment>
  		{loading && <h2>Hola</h2>}

  	{/*TOFIX:*/}
  		{	project.title &&  
	  		(<Container>
		      <HeaderBoard {...project} setFavorite={setFavorite} />
		      <GridOfList
		        lists={lists}
		        addList={handleAddList}
		      />
		    </Container>)
	  	}
    </Fragment>	
  )
}

const mapStateToProps = ({ boardReducer, projectReducer, appReducer }) => {
  return {
    boardReducer,
    projectReducer,
    appReducer
  }
}

const mapDispatchToProps = {
	getBoard,
	setFavorite,
	addList
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)