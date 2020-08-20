import { mock } from '../mocks/mock'
import { SET_FAVORITE_PROJECT, CREATE_PROJECT, CHANGE_BOARD_COLOR } from '../types/dataTypes'

const INITIAL_STATE = {
  boardColor: null
}

export default (state = { ...mock, ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case SET_FAVORITE_PROJECT:
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

    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      }

    case CHANGE_BOARD_COLOR:
      return {
        ...state,
        boardColor: action.payload
      }

    default:
      return state
  }
}
