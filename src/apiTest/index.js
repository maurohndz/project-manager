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

export const getBoard = async (boardId) => boardMock.find( board => board.id === boardId )

export const addList = async ( boardId, data ) => {
	let list = {
		id: uuidv4(),
		...data,
		cards: []
	}

	boardMock.forEach(board => {
		if(board.id === boardId){
			board.lists.push(list)
		}
	})

	return list
}

export const addCard = async (boardId, listId, card) => {
	let fullCard = {
		id: uuidv4(),
		title: card.title,
		status: card.status || false
	}

	boardMock.forEach(board => {
		if(board.id === boardId){
			board.lists.forEach((list) => {
				if (list.id === listId) {
					list.cards.push(fullCard)
				}
			})
		}
	})

	return fullCard
}