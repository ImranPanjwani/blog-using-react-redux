export const GET_POST = 'GET_POST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const getPost = () => ({
  type: GET_POST,
})

export const getPostSuccess = (post) => ({
  type: GET_POST_SUCCESS,
  payload: post,
})

export const getPostFailure = () => ({
  type: GET_POST_FAILURE,
})

export function fetchPost(id) {
  return async dispatch => {
    dispatch(getPost())

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      const post = await response.json()

      dispatch(getPostSuccess(post))
    } catch (error) {
      dispatch(getPostFailure())
    }
  }
}
