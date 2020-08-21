import { SET_FAVORITE_PROJECT, CREATE_PROJECT, CREATE_LIST } from '../types/dataTypes'
import { v4 as uuidv4 } from 'uuid'

export const setFavoriteProject = (idProject) => {
  console.log(idProject)
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

export const createList = (data) => {
  return {
    type: CREATE_LIST,
    payload: {
      ...data,
      _id: uuidv4(),
      cards: []
    }
  }
}
