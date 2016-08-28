import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Router from './services/router'
import AppRoot from './components/app_root'
import buildStore from './store'

var store = buildStore()

DOM(store)
Router(store)

store.dispatch({ type: 'init' })

/*
 * DOM service:
 * listens to the store and updates the DOM via decca
 */

function DOM (store) {
  const root = document.getElementById('app')

  function update () {
    ReactDOM.render(
      <Provider store={store}>
        <AppRoot />
      </Provider>,
      root)
  }

  store.subscribe(update)
  update()
}
