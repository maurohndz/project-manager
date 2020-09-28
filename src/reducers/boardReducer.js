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
        ...state,
        board: {
          ...state.board,
          lists: [...state.board.lists, action.payload]
        }
      }

    case ADD_CARD:
      return {
        ...state,
        board: {
          ...state.board,
          lists: state.board.lists.map(list => {
            if(list.id === action.payload.listId){
              list.cards.push(action.payload.card)
               return list
            }
            return list
          })
        }
      }


    default:
      return state
  }
}
