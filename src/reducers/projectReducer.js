import { projectMock } from '../mocks/projectMock'
import { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT FAVORITE } from '../types/projectTypes'

const INITIAL_STATE = {
	projects: projectMock
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) { 

    default:
      return state
  }
}
