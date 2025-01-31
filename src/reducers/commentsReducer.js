import * as actions from './../actions/commentsActions'

export const initialState = {
  comments: [],
  loading: false,
  hasErrors: false,
}

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return {
        ...state,
        postId: action.payload,
        loading: true,
      }
    case actions.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        hasErrors: false,
      }
    case actions.GET_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      }
    default:
      return state
  }
}
