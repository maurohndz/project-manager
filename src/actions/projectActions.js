import { SET_FAVORITE_PROJECT } from '../types/dataTypes'

export const setFavoriteProject = (idProject) => {
  return {
    type: SET_FAVORITE_PROJECT,
    payload: idProject
  }
}
