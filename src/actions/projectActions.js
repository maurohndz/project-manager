import { v4 as uuidv4 } from 'uuid'

import { getProjects as get, createProject, updateFavorite } from '../apiTest'

import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, FAVORITE } from '../types/projectTypes'
import { LOADING } from '../types/appTypes'

export const getProjects = (userId) => async (dispatch) => {
  dispatch({ type: LOADING })

  let projects = await get()
  dispatch({
    type: GET_PROJECTS,
    payload: projects
  })
  dispatch({ type: LOADING })

}

export const addProject = (project) => async (dispatch) => {
  dispatch({ type: LOADING })

  let fullProject = await createProject(project)

  dispatch({
    type: ADD_PROJECT,
    payload: fullProject,
  })
  dispatch({ type: LOADING })

}

export const setFavorite = (projectId) => async (dispatch) => {
  dispatch({ type: LOADING })

  let response = await updateFavorite(projectId)

  dispatch({
    type: FAVORITE,
    payload: projectId
  })
  dispatch({ type: LOADING })  
}