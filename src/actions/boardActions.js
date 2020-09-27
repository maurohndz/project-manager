import { v4 as uuidv4 } from 'uuid'

import { getBoard as get } from '../apiTest'

import { GET_BOARD } from '../types/boardTypes'
import { LOADING } from '../types/appTypes'


export const getBoard = (boardId) => async (dispatch) => {
	dispatch({ type: LOADING })

	let board = await get(boardId)	

	dispatch({
		type: GET_BOARD,
		payload: board
	})
	dispatch({ type: LOADING })
	
}