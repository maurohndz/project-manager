import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, FAVORITE } from '../types/projectTypes'

const INITIAL_STATE = {
	projects: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
  	
  	case ADD_PROJECT:
  		return {
  			...state,
  			projects: action.payload
  		}

    case FAVORITE:
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project._id === action.payload) {
            return {
              ...project,
              favorite: !project.favorite
            }
          }
          return project
        })
      }

    case 'test':
      return state

    default:
      return state
  }
}
