import { combineReducers } from 'redux'
import DataReducer from './DataReducer'

import projectReducer from './projectReducer'
import userReducer from './userReducer'
import boardReducer from './boardReducer'
import appReducer from './appReducer'

export default combineReducers({
  appReducer,
  DataReducer,
  projectReducer,
  userReducer,
  boardReducer
})
