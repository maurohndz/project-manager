import { v4 as uuidv4 } from 'uuid'

import { getBoard as get } from '../apiTest'

import { GET_BOARD } from '../types/boardTypes'
import { CHENGE_COLOR } from '../types/appTypes'


export const getBoard = (boardId, color) => async (dispatch) => {
	let board = await get(boardId)	

	dispatch({
		type: CHENGE_COLOR,
		payload: color
	})

	dispatch({
		type: GET_BOARD,
		payload: board
	})
}