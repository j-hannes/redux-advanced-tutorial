import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import {/*selectReddit, */fetchPostsIfNeeded} from './actions'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

const store = createStoreWithMiddleware(rootReducer)

// store.dispatch(selectReddit('reactjs'))
store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
  /* eslint no-console: 0 */
  console.log(store.getState())
)

/*
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

let store = createStore(todoApp)

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
*/
