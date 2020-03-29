import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import { Post } from '../components/Post'

// Redux state is now in the props of the component
const PostsPage = ({ dispatch, posts, loading, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  // Show loading, error or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return posts.map(post => <Post key={post.id} post={post}></Post>)
  }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  hasErrors: state.posts.hasErrors
})

// Connect Redux to React
export default connect(mapStateToProps)(PostsPage)
