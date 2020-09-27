import { v4 as uuidv4 } from 'uuid'

import { getProjects as get, createProject, updateFavorite } from '../apiTest'

import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, FAVORITE } from '../types/projectTypes'

export const getProjects = (userId) => async (dispatch) => {
  let projects = await get()
  dispatch({
    type: GET_PROJECTS,
    payload: projects
  })
}

export const addProject = (project) => async (dispatch) => {
  let fullProject = await createProject(project)

  dispatch({
    type: ADD_PROJECT,
    payload: fullProject,
  })
}

export const setFavorite = (projectId) => async (dispatch) => {
  let response = await updateFavorite(projectId)

  dispatch({
    type: FAVORITE,
    payload: projectId
  })
}