export const getPokeInfoApi = (instance, pokeNo) => {
  return instance.get('/pokemon/' + pokeNo)
}
