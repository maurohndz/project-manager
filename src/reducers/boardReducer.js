import { ADD_BOARD, SELECT_BOARD } from '../types/boardTypes'
import { boardMock } from '../mocks/boardMock'

const INITIAL_STATE = {
	boards: boardMock,
  boardSelect: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

  	case ADD_BOARD:
  		return {
  			...state,
  			boards: [...state.boards, action.payload]
  		}

    case SELECT_BOARD:
      return {
        ...state,
        boardSelect: state.boards.find( board => board.id === action.payload)
      }

    default:
      return state
  }
}
