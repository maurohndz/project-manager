import { addList as add} from '../apiTest'

import { ADD_LIST } from '../types/listTypes'
import { LOADING } from '../types/appTypes'


export const addList = (boardId, list) => async (dispatch) => {
	dispatch({ type: LOADING })

	let response = await add(boardId, list)

	dispatch({
		type: ADD_LIST,
		payload: response
	}) 
	dispatch({ type: LOADING })
}