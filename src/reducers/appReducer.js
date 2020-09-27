import { CHENGE_COLOR, LOADING } from '../types/appTypes'

const INITIAL_STATE = {
  loading: false,
  error: false,
  layoutColor: null,//color default
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOADING:
      return {
        ...state,
        loading: !state.loading
      }
  	
  	case CHENGE_COLOR:
  		return {
  			...state,
  			layoutColor: action.payload
  		}

    default:
      return state
  }
}
