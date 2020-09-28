import { addCard as add } from '../apiTest'

import { ADD_CARD } from '../types/cardTypes'
import { LOADING } from '../types/appTypes'

export const addCard = (listId, card) => async (dispatch, getState) => {
	dispatch({ type: LOADING })
	let { board } = await getState().boardReducer
	let fullCard = await add(board.id, listId, card)

	dispatch({
		type: ADD_CARD,
		payload: {
			listId,
			card: fullCard
		}
	})
	dispatch({ type: LOADING })	
}