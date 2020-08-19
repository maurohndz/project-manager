import { SET_FAVORITE_PROJECT, CREATE_PROJECT } from '../types/dataTypes'
import { v4 as uuidv4 } from 'uuid'

export const setFavoriteProject = (idProject) => {
  return {
    type: SET_FAVORITE_PROJECT,
    payload: idProject
  }
}

export const createProject = (data) => {
  return {
    type: CREATE_PROJECT,
    payload: {
      ...data,
      _id: uuidv4(),
      favorite: false,
      list: []
    }
  }
}
