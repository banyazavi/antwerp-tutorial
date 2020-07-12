import { call, put, takeEvery } from 'redux-saga/effects'
import { getPokeInstance } from '../common'
import { getPokeInfoApi } from '../apis/pokeApi'

function * getPokeInfo (action) {
  if (action.pokeNo > 0 && action.pokeNo < 126) {
    const instance = getPokeInstance()

    try {
      const result = yield call(getPokeInfoApi, instance, action.pokeNo)
      yield put({ type: 'GET_POKEMON_STATUS_SUCCESS', data: result.data })
    } catch (e) {
      yield put({ type: 'GET_POKEMON_STATUS_FAILED', message: 'GET_POKEMON_STATUS_FAILED', stack: e.stack })
    }
  }
}

export const pokeArray = [
  takeEvery('GET_POKEMON_STATUS_REQUESTED', getPokeInfo)
]
