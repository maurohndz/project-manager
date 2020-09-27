import { v4 as uuidv4 } from 'uuid'

import { projectMock } from '../mocks/projectMock'
import { boardMock } from '../mocks/boardMock'

export const getProjects = async () => projectMock

export const createProject = async (data) => {
	let projectId = uuidv4()
	let boardId = uuidv4()

	let board = {
		id: boardId,
		projectId: projectId,
		lists: []
	}

	let project = {
		id: projectId,
		userId: data.userId,
		boardId: boardId,
		title: data.title,
		favorite: data.favorite || false,
		color: data.color
	}

	boardMock.push(board)
	projectMock.push(project)

	return projectMock
}

export const updateFavorite = async (projectId) => {
	projectMock.forEach((project) => {
		if(project.id === projectId){
			project.favorite = !project.favorite 
		}
	})

	return {}
}

export const getBoard = async (boardId) => boardMock.find( board.id === boardId )

export const addList = async (data) => {
	let list = {
		id: uuidv4(),
		...data.list
	}

	boardMock.forEach(board => {
		if(board.id === data.boardId){
			board.lists.push(list)
		}
	})

	return {
		error: null,
		body: list.id
	}
}