import * as actions from './../actions/postActions'

export const initialState = {
  post: {},
  loading: true,
  hasErrors: false,
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_POST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_POST_SUCCESS:
      return {
        post: action.payload,
        loading: false,
        hasErrors: false
      }
    case actions.GET_POST_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      }
    default:
      return state
  }
}
