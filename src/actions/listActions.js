import { addList as add} from '../apiTest'

import { ADD_LIST } from '../types/listTypes'
import { LOADING } from '../types/appTypes'


export const addList = (list) => async (dispatch, getState) => {
	dispatch({ type: LOADING })

	let { board } = await getState().boardReducer
	let response = await add(board.id, list)

	dispatch({
		type: ADD_LIST,
		payload: response
	}) 
	dispatch({ type: LOADING })
}