import { v4 as uuidv4 } from 'uuid'

import { SELECT_BOARD } from '../types/boardTypes'
import { CHENGE_COLOR } from '../types/appTypes'

export const schemaBoard = (projectId) => {
	return {
		id: uuidv4(),
		projectId: projectId,
		lists: []
	}
}

export const selectBoard = (projectId) => async (dispatch, getState) => {
	const { projects } = await getState().projectReducer
	const { color, boardId } = projects.find(element => element.id === projectId) 

	dispatch({
		type: CHENGE_COLOR,
		payload: color
	})

	dispatch({
		type: SELECT_BOARD,
		payload: boardId
	})
}