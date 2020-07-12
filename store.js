import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const configureStore = (state) => {
  const logger = createLogger

  const store = createStore(
    reducers,
    state,
    applyMiddleware(sagaMiddleware, logger)
  )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas)
  }

  store.runSagaTask()

  return store
}

export default configureStore
