import { GET_BOARD } from '../types/boardTypes'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

  	case GET_BOARD:
      return {
        ...action.payload
      }

    default:
      return state
  }
}
