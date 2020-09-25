import { user } from '../mocks/userMock'

const INITIAL_STATE = {
	...user
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) { 

    default:
      return state
  }
}
