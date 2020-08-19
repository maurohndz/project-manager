import { mock } from '../mocks/mock'
import { SET_FAVORITE_PROJECT, CREATE_PROJECT } from '../types/dataTypes'

// const INITIAL_STATE = {
//   projects: []
// }

export default (state = mock, action) => {
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

    default:
      return state
  }
}
