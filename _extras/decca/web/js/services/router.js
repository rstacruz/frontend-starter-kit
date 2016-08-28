import route from 'riot-route'

/*
 * Router:
 * Router service. Listens to `location.history` and dispatches store actions.
 */

function Router (store) {
  route('/', () => {
    store.dispatch({ type: 'view', view: 'home' })
  })

  route.base('/')
  route.start(true)
}

export default Router
