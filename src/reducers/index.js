import { combineReducers } from 'redux'

import projectReducer from './projectReducer'
import boardReducer from './boardReducer'
import appReducer from './appReducer'

export default combineReducers({
  appReducer,
  projectReducer,
  boardReducer
})
