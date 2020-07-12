import { all } from 'redux-saga/effects'
import { pokeArray } from './pokeSaga'

function * sagas () {
  /* yield all([
    ...fooSagasArray,
    ...barSagasArray
  ]) */

  yield all([
    ...pokeArray
  ])
}

export default sagas
