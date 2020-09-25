import { ADD_BOARD } from '../types/boardTypes'
import { boardMock } from '../mocks/boardMock'

const INITIAL_STATE = {
	boards: boardMock
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) { 
  	case ADD_BOARD:
  		return {
  			...state,
  			boards: [...state.boards, action.payload]
  		}

    default:
      return state
  }
}
