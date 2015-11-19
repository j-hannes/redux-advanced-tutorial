import fetch from 'isomorphic-fetch'

export const SELECT_REDDIT = 'SELECT_REDDIT'
export function selectReddit(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit
  }
}

export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'
export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    reveivedAt: Date.now()
  }
}

export function fetchPosts(reddit) {
  return function(dispatch) {
    dispatch(requestPosts)
    return fetch(`http://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(reddit, json))
      )
  }
}

/*
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  }
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
}
*/
