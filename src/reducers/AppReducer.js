const INITIAL_STATE = {
  loading: false,
  error: false,
  colors: [
    '222831',
    '383e56',
    '251f44',
    '0f4c75',
    '0566dd',
    '900c3f',
    'c70039',
    'e7305b',
    'e8505b',
    'fccd4d'
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}
