import { createStore, applyMiddleware, compose } from 'redux'
import buildReducer from 'build-reducer'
import thunk from 'redux-thunk'

/*
 * Builds a store.
 */

function buildStore () {
  const middleware = [thunk]
  let enhancer = applyMiddleware(...middleware)

  if (window.devToolsExtension) {
    enhancer = compose(enhancer, window.devToolsExtension())
  }

  return createStore(buildReducer(reducers), {}, enhancer)
}

var reducers = {
  init (state, action) {
    return state
  },

  view: (state, {view}) {
    return state
  }
}

module.exports = buildStore
