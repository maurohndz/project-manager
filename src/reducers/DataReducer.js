import { mock } from '../mocks/mock'
import { SET_FAVORITE_PROJECT, CREATE_PROJECT, CHANGE_BOARD_COLOR, CREATE_LIST, CREATE_CARD } from '../types/dataTypes'

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

    case CREATE_LIST:
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project._id === action.payload.projectID) {
            return {
              ...project,
              list: [...project.list, action.payload]
            }
          }

          return project
        })
      }

    case CREATE_CARD:
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project._id === action.payload.projectID) {
            return {
              ...project,
              list: project.list.map((list) => {
                if (list._id === action.payload.listID) {
                  return {
                    ...list,
                    cards: [...list.cards, action.payload]
                  }
                }

                return list
              })
            }
          }
          return project
        })
      }

    default:
      return state
  }
}
