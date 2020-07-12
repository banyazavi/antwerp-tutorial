import { Map, fromJS } from 'immutable'

const initialState = Map({
  pokeNo: 25,
  pokeData: null
})

const pokeReducer = (state = initialState, action) => {
  let nextState = state
  if (!nextState.get) {
    nextState = fromJS(state)
  }

  switch (action.type) {
    case 'GET_POKEMON_STATUS_SUCCESS':
      nextState = nextState.set('pokeNo', action.data.id)
      nextState = nextState.set('pokeData', action.data)
      break
  }

  return nextState
}

export default pokeReducer
