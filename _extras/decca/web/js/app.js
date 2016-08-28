import { element, dom } from 'decca'
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
  const render = dom.createRenderer(document.getElementById('app'), store.dispatch)

  function update () {
    const state = store.getState()
    render(<AppRoot />, state)
  }

  store.subscribe(update)
  update()
}
