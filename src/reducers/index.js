import { combineReducers } from 'redux'
import DataReducer from './DataReducer'

import projectReducer from './projectReducer'
import boardReducer from './boardReducer'
import appReducer from './appReducer'

export default combineReducers({
  appReducer,
  DataReducer,
  projectReducer,
  boardReducer
})
