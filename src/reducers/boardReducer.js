import { GET_BOARD } from '../types/boardTypes'

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

    default:
      return state
  }
}
