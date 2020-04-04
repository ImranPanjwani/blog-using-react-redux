import { combineReducers } from 'redux'

import postsReducer from './postsReducer'
import commentsReducer from './commentsReducer'
import { postReducer } from './postReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer
})

export default rootReducer
