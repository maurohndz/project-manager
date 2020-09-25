import { combineReducers } from 'redux'
import AppReducer from './AppReducer'
import DataReducer from './DataReducer'

import projectReducer from './projectReducer'
import userReducer from './userReducer'
import boardReducer from './boardReducer'


export default combineReducers({
  AppReducer,
  DataReducer,
  projectReducer,
  userReducer,
  boardReducer
})
