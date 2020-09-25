import { v4 as uuidv4 } from 'uuid'

import { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, FAVORITE } from '../types/projectTypes'
import { ADD_BOARD } from '../types/boardTypes'
import { schemaBoard } from './boardActions'

export const addProject = (project) => async (dispatch) => {
  let projectId = uuidv4()
  let board = schemaBoard(projectId)

  dispatch({
    type:ADD_BOARD,
    payload: board,
  })

  let fullProject = {
    id: projectId,
    userId: project.userId,
    boardId: board.id,
    title: project.title,
    favorite: false,
    color: project.color
  }

  dispatch({
    type:ADD_PROJECT,
    payload: fullProject,
  })
}

export const setFavoriteProject = (idProject) => {

}

export const createProject = (data) => {

}

export const createList = (data) => {

}

export const createCard = (data) => {

}
