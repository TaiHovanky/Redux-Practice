//3) combine reducers so that only one object needs to be exported
import { combineReducers } from 'redux'

import discussion from './discussionReducer'
import camp from './campReducer'

export default combineReducers({
  discussion,
  camp
})