import { combineReducers, createStore } from 'redux'

import { session } from './ducks'

const reducers = combineReducers({
  session
})

export type AppReduxState = ReturnType<typeof reducers>;

const store = createStore(reducers)

export default store