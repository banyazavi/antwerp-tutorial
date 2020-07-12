import { combineReducers } from 'redux'
import { Map, fromJS } from 'immutable'
import pokeReducer from './pokeReducer'

const initialState = Map({
  commonState: 0
})

const commonReducer = (state = initialState, action) => {
  let nextState = state
  if (!nextState.get) {
    nextState = fromJS(state)
  }

  return nextState
}

const reducers = combineReducers({
  commonReducer,
  pokeReducer
})

export default reducers
