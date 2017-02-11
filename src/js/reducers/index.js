//3) combine reducers so that only one object needs to be exported
import { combineReducers } from 'redux'

import discussions from './discussionReducer'
import camps from './campReducer'
import comments from './commentReducer'
import upvotes from './upvoteReducer'

const cgApp = combineReducers({
  discussions,
  camps,
  comments,
  upvotes
})

export default cgApp