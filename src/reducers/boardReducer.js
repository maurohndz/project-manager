import { GET_BOARD } from '../types/boardTypes'
import { ADD_LIST } from '../types/listTypes'
import { ADD_CARD } from '../types/cardTypes'


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
        ...state
      }

    case ADD_CARD:
      return {
        ...state
      }


    default:
      return state
  }
}
