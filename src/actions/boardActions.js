import { v4 as uuidv4 } from 'uuid'

import { getBoard as get } from '../apiTest'

import { GET_BOARD } from '../types/boardTypes'
import { CHENGE_COLOR } from '../types/appTypes'


export const getBoard = (boardId) => async (dispatch) => {
	const { projects } = await getState().projectReducer

	let board = get(boardId)	
	let { color } = projects.find(element => element.id === board.projectId)

	dispatch({
		type: CHENGE_COLOR,
		payload: color
	})

	dispatch({
		type: GET_BOARD,
		payload: board
	})
}