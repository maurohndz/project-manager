import { GET_BOARD } from '../types/boardTypes'
import { ADD_LIST } from '../types/listTypes'


const INITIAL_STATE = {
	board:{}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

  	case GET_BOARD:
      return {
      	...state,
        board: action.payload
      }

    case ADD_LIST:
      return {
        ...state,
        board: {
          ...state.board,
          lists: [...state.board.lists, action.payload]
        }
      }


    default:
      return state
  }
}
